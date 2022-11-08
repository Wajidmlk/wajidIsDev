import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { tpMessageProps } from './DragDropFiles';

const successTime = 1000;
const errorTime = 2000;

type tpValidationsMsg = {
  errorCountText: string,
  errorFormatText: string,
  successText: string,
  errorMaxSizeText: string
}
const ShowMessage = (
  text: string,
  type: string,
  timeout: number,
  setMessage: Dispatch<SetStateAction<tpMessageProps>>,
) => {
  setMessage({ show: true, text, type });
  setTimeout(() => setMessage({ show: false, text: null, type: null }), timeout);
};

const CheckErrors = (
  files: File[],
  {
    errorCountText, errorFormatText, errorMaxSizeText,
  }: tpValidationsMsg,
  { count, formats, maxSize }: { count?: number | undefined, formats?: string[] | undefined, maxSize?: number | undefined },
  setMessage: Dispatch<SetStateAction<tpMessageProps>>,
): boolean => {
  if (count && count < files.length) {
    ShowMessage(errorCountText, 'error', errorTime, setMessage);
    return true;
  }
  if (formats
    && files.some((file: File) => !formats.some((format) => file.name.toLowerCase().endsWith(format.toLowerCase())))
  ) {
    ShowMessage(errorFormatText, 'error', errorTime, setMessage);
    return true;
  }
  if ((files && maxSize) && files.some((file: File) => file.size > maxSize)) {
    ShowMessage(errorMaxSizeText, 'error', errorTime, setMessage);
    return true;
  }
  return false;
};

export const HandleUpload = (
  { files, onUpload }: { files: File[], onUpload: (files: File[]) => void },
  messages: tpValidationsMsg,
  validations: { count?: number | undefined, formats?: string[] | undefined, maxSize?: number | undefined },
  setMessage: Dispatch<SetStateAction<tpMessageProps>>,

): void => {
  const { successText } = messages;
  if (CheckErrors(files, messages, validations, setMessage)) return;
  if (files && files.length) {
    ShowMessage(successText, 'success', successTime, setMessage);
    onUpload(files);
  }
};
export const FormatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return '0 Bytes';
  const sizes = ['Bytes', 'KB', 'MB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${parseFloat((bytes / (1024 ** index)).toFixed(decimals < 0 ? 0 : decimals))} ${sizes[index]}`;
};

export const HandleSelectFiles = (
  { files, onUpload }: { files: File[], onUpload: (files: File[]) => void },
  messages: tpValidationsMsg,
  validations: { count?: number | undefined, formats?: string[] | undefined, maxSize?: number | undefined },
  setMessage: Dispatch<SetStateAction<tpMessageProps>>,
): void => {
  HandleUpload({ files, onUpload }, messages, validations, setMessage);
};

export const HandleDragOver = (e: DragEvent): void => {
  e.preventDefault();
  e.stopPropagation();
};

export const HandleDragLeave = (
  e: DragEvent,
  drag: MutableRefObject<HTMLDivElement | null>,
  setDragging: (value: SetStateAction<boolean>) => void,
): void => {
  e.preventDefault();
  e.stopPropagation();
  if (e.target === drag.current) setDragging(false);
};

export const HandleDragEnter = (
  e: DragEvent,
  drag: MutableRefObject<HTMLDivElement | null>,
  setDragging: (value: SetStateAction<boolean>) => void,
): void => {
  e.preventDefault();
  e.stopPropagation();
  if (e.target !== drag.current) setDragging(true);
};

export const OpenFileDialog = (
  input: MutableRefObject<HTMLInputElement | null>,
): void => input && input.current?.click();
