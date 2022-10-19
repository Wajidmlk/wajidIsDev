import React, { ComponentType } from 'react';
import {
  Dialog, DialogTitle, IconButton, DialogContent,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { DialogProps } from '@mui/material/Dialog/Dialog';
import { PaperProps } from '@material-ui/core/Paper';
import './dialogBox.scss';

export type tpDialogBoxProps = {
  open: boolean,
  title: string;
  onClose: () => void;
  PaperComponent?: ComponentType<PaperProps> | undefined,
  children: React.ReactNode & (JSX.Element | JSX.Element[]);
  customActions?: React.ReactNode & (JSX.Element | JSX.Element[]);
  size?: DialogProps['maxWidth'];
  className?: string;
  hideBackdrop?: boolean;
};

const DialogBox = ({
  title, onClose, open, size, children, className, PaperComponent, customActions,
  hideBackdrop, removeBackdrop,
}: tpDialogBoxProps&{
    removeBackdrop?: boolean}): JSX.Element => (
      <Dialog
        open={open}
        maxWidth={size}
        PaperComponent={PaperComponent}
        disableEnforceFocus
        className={`dialog-comp-root ${className} background-clickable-${hideBackdrop && removeBackdrop}`}
        hideBackdrop={hideBackdrop}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          {title}
          {customActions}
          <IconButton
            aria-label='close'
            onClick={onClose}
            className='close-button'
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {children}
        </DialogContent>
      </Dialog>
);

DialogBox.defaultProps = {
  removeBackdrop: false,
};

export default DialogBox;
