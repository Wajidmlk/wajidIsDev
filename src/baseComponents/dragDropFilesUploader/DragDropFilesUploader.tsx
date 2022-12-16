import React from 'react';
import {
  useEffect, useState, Dispatch, SetStateAction,
} from 'react';
import { Grid } from '@mui/material';
import FilesDragAndDrop from './dragDropFiles/DragDropFiles';
import DragDropFileInput from './dragDropFiles/dragDropFilesInput/DragDropFilesInput';
import { TFile } from '../../common/commonTypes';

type tpProps = {

  setUploadedFiles: Dispatch<SetStateAction<TFile[]>>,
  uploadedFiles: TFile[],
  count?: number,
  maxSize?: number,
}

const DEFAULT_FILE_FORMATS = ['doc', 'docs', 'docx', 'xls', 'xlsx', 'txt', 'pdf', 'ppt', 'pptx'];

const DragDropFileUploader = (
  {
    count, maxSize, uploadedFiles, setUploadedFiles,
  }: tpProps,
): JSX.Element => {
  const [files, setFiles] = useState<File[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const OnUpload = (newFiles: File[]): void => setFiles(
    [...files, ...newFiles].filter((
      value: File, index: number, array: File[],
    ) => array.findIndex((
      file: File,
    ) => (file.name === value.name && file.size === value.size)) === index),
  );
  const OnRemoveFile = async (deletedFile: File): Promise<void> => {
    const deletedFileData = uploadedFiles.find((file) => file.fName === deletedFile.name);
    if (deletedFileData) {
     /* const resp = await apDeleteFiles([deletedFileData]);
      if (resp.status === 200) {
        setFiles(files.filter((file) => file !== deletedFile));
        setUploadedFiles(uploadedFiles.filter((file) => file.fName !== deletedFile.name));
      } else Toast(resp.body.message, 'error');*/
    }
  };

  useEffect(() => {
    const UploadNewFiles = async (newFiles: File[]) => {
      const filesToUpload: File[] = [];

      newFiles.forEach((file) => {
        if (!uploadedFiles.some(({ fName }) => file.name === fName)) filesToUpload.push(file);
      });

      if (filesToUpload.length > 0) {
        const formData = new FormData();
        filesToUpload.forEach((file) => formData.append('files', file));
/*
        const resp = await apAddFiles(userEntityId, 'doc', formData);
        if (resp.status === 200) {
          setUploadedFiles((prevState) => ([...prevState, ...resp.body.data]));
        } else {
          setFiles([]);
          Toast(resp.body.message, 'error');
        }*/
      }
    };
    UploadNewFiles(files);
  }, [files, setUploadedFiles, uploadedFiles]);

  return (
    <div>
      <FilesDragAndDrop
        data={{ files, onUpload: OnUpload }}
        validations={{
          count: count || 20,
          formats: DEFAULT_FILE_FORMATS,
          maxSize: maxSize || 5,
        }}
        openDialogOnClick={open}
      >
        <Grid
          container
          direction='column'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <DragDropFileInput
            files={files}
            setOpen={setOpen}
            OnRemoveFile={OnRemoveFile}
          />
        </Grid>
      </FilesDragAndDrop>
    </div>
  );
};

DragDropFileUploader.defaultProps = {
  count: undefined,
  maxSize: undefined,
};
export default DragDropFileUploader;
