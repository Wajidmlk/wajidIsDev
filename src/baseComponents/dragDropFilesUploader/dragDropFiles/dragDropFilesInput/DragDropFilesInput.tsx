import React, { Dispatch, SetStateAction } from 'react';
import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';
import { Grid, Typography } from '@mui/material';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { FormatBytes } from '../serviceDragDropFiles';

type tpProps = {
  files: File[],
  setOpen: Dispatch<SetStateAction<boolean>>,
  OnRemoveFile: (deletedFile: File) => void,
}

const FileList = ({
  files, OnRemoveFile,
}: Omit<tpProps, 'setOpen'>): JSX.Element => {
  return (
    <div className='mt-3 uploaded-files-container'>
      {files.map((file) => {
        const { name, lastModified, size } = file;
        const croppedName = name.length > 20
          ? `${name.substring(0, 20)}...` : name;
        return (
          <div className='file-row' key={`${name}${lastModified}`}>
            <Typography className='mb-1 mr-2' variant='h6'>
              {`${croppedName} (${FormatBytes(size)})`}
            </Typography>
            <CloseTwoToneIcon
              sx={{ cursor: 'pointer' }}
              color='error'
              fontSize='medium'
              onClick={() => OnRemoveFile(file)}
            />
          </div>
        );
      })}
      {files.length <= 0 && (
        <Typography className='mb-1 mr-2' variant='caption'>
          No Data Found
        </Typography>
      )}
    </div>
  );
};

const DragDropFileInput = ({
  files, setOpen, OnRemoveFile,
}: tpProps): JSX.Element => {
  return (
    <div className='files-container'>
      <Grid item xs>
        <Grid container direction='row'>
          <span className='mt-4 mr-2'><CloudUploadTwoToneIcon fontSize='large' /></span>
          <Typography variant='h5' sx={{ m: 2, fontSize: '0.8125rem' }}>
            Drag Files
            <Typography
              variant='h5'
              onMouseLeave={() => setOpen(false)}
              sx={{ color: 'blue', textDecoration: 'underline', fontSize: '0.8125rem' }}
              onMouseEnter={() => setOpen(true)}
            >
            Browse
            </Typography>
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <FileList
          files={files}
          OnRemoveFile={OnRemoveFile}
        />
      </Grid>
    </div>
  );
};

export default DragDropFileInput;
