import { Grid } from '@mui/material';
import * as React from 'react';
import {
  MutableRefObject, ReactElement, useCallback, useRef, useState,
} from 'react';
import {
  FormatBytes,
  HandleDragEnter,
  HandleDragLeave,
  HandleDragOver,
  HandleSelectFiles,
  HandleUpload,
  OpenFileDialog,
} from './serviceDragDropFiles';

export type tpMessageProps = {
  show: boolean;
  text: string | null;
  type: string | null;
}

type tpProps = {
  data: { files: File[], onUpload: (files: File[]) => void };
  children: ReactElement | ReactElement[];
  validations: { count?: number, formats?: string[]; maxSize?: number }
  openDialogOnClick: boolean;
}

type tpMsgBoxProps = {
  message: tpMessageProps,
  dragging: boolean,
  drag: MutableRefObject<HTMLDivElement | null>
}
const MessageBox = ({ message, dragging, drag }: tpMsgBoxProps): JSX.Element => {
  return (
    <>
      {message.show && (
        <Grid
          className={`message 
            ${message.type === 'success' && 'message-success'} 
            ${message.type === 'error' && 'message-error'}`}
        >
          {message.text}
        </Grid>
      )}
      {dragging && (
        <Grid className='message' ref={drag}>
          Drop Files Here
        </Grid>
      )}
    </>
  );
};

const FilesDragAndDrop = ({
  data,
  children,
  validations,
  openDialogOnClick,
}: tpProps): JSX.Element => {
  const { count, formats, maxSize } = validations;
  const { files, onUpload } = data;
  const messages = {
    errorCountText: `Max Upload Files Limit : ${count}`,
    errorMaxSizeText: `Max File Size: ${FormatBytes(maxSize as number)}`,
    errorFormatText: `Invalid Format: ${formats && formats.join(', ')}`,
    successText: 'File Successfully Uploaded',
  };
  const [dragging, setDragging] = useState(false);
  const [message, setMessage] = useState<tpMessageProps>({ show: false, text: null, type: null });

  const HandleDrop = (e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const allFiles = e.dataTransfer ? [...files, ...e.dataTransfer.files] : [];
    HandleUpload({ files: allFiles, onUpload }, messages, validations, setMessage);
  };

  const useHookDragDropRefCallback = (): React.MutableRefObject<HTMLDivElement | null>[] => {
    const ref = useRef<HTMLDivElement | null>(null);
    const setRef = useCallback((element) => {
      if (ref.current) ref?.current.removeEventListener('dragover', (e) => HandleDragOver(e));
      if (ref.current) ref?.current.removeEventListener('drop', (e) => HandleDrop(e));
      if (ref.current) ref?.current.removeEventListener('dragenter', (e) => HandleDragEnter(e, ref, setDragging));
      if (ref.current) ref?.current.removeEventListener('dragleave', (e) => HandleDragLeave(e, ref, setDragging));

      if (element) element.addEventListener('dragover', (e: DragEvent) => HandleDragOver(e));
      if (element) element.addEventListener('drop', (e: DragEvent) => HandleDrop(e));
      if (element) element.addEventListener('dragenter', (e: DragEvent) => HandleDragEnter(e, ref, setDragging));
      if (element) element.addEventListener('dragleave', (e: DragEvent) => HandleDragLeave(e, ref, setDragging));

      ref.current = element;
    }, []);

    return [setRef as unknown as MutableRefObject<HTMLDivElement | null>];
  };
  const { drag, drop, input } = {
    drag: useHookDragDropRefCallback()[0],
    drop: useHookDragDropRefCallback()[0],
    input: useRef<HTMLInputElement | null>(null),
  };

  return (
    <div className='cp-drag-drop-file-root'>
      <Grid
        ref={drop}
        className='container'
        sx={{ cursor: openDialogOnClick ? 'pointer' : 'default' }}
        onClick={openDialogOnClick ? () => OpenFileDialog(input) : undefined}
      >
        <input
          ref={input}
          type='file'
          className='input'
          accept={formats ? formats.map((format) => `.${format}`).join(', ') : undefined}
          multiple={!count || count > 1}
          onChange={(e) => HandleSelectFiles(
            { files: [...files, ...e.target.files as FileList], onUpload },
            messages, validations, setMessage,
          )}
        />
        <MessageBox message={message} dragging={dragging} drag={drag} />
        {children}
      </Grid>
    </div>
  );
};

export default FilesDragAndDrop;
