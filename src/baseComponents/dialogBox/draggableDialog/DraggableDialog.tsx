import React from 'react';
import {
  Dispatch, ReactNode, useState, SetStateAction,
} from 'react';
import Paper from '@material-ui/core/Paper';
import  { PaperProps } from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState from 'material-ui-popup-state';
import { bindTrigger, bindMenu } from 'material-ui-popup-state';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Resizable } from 'react-resizable';
import DialogBox from '../DialogBox';
import { tpDialogBoxProps } from '../DialogBox';
import { getIcon } from '../../../appUtils/AppUtilities';


export type tpDialogDefaultHeightWidthProps = {
  defaultHeight?: number,
  defaultWidth?: number,
};

export type tpDialogDragEventAxis = {
  movementY: number, movementX: number,
};

type tpDragDialogState = {
  maximum: boolean,
  onTop: boolean,
};

type tpDragDialog = {
  onDelete?: () => void,
  onPrint?: () => void,
}

const CpMenuItems = (props: tpDragDialog&{
  setState: Dispatch<SetStateAction<tpDragDialogState>>,
  onTop: boolean,
  popupStateClose: () => void,
}) => {
  const {
    onDelete, onPrint, setState, onTop, popupStateClose,
  } = props;
  return (
    <>
      <MenuItem onClick={() => {
        setState((prevState) => ({ ...prevState, maximum: false }));
        popupStateClose();
      }}
      >
        {getIcon({CODE: "CloseFullscreen", titleAccess: 'Minimize'})}
        Minimize
      </MenuItem>
      {onTop && (
      <MenuItem onClick={() => {
        setState((prevState) => ({ ...prevState, onTop: !onTop }));
        popupStateClose();
      }}
      >

        {getIcon({
          CODE: "Airplay", titleAccess: 'Pin to Top',
          className:`${onTop ? 'selected-item' : ''}`,
        })}
        Always On Top
      </MenuItem>
      )}
      {onDelete && (
      <MenuItem onClick={() => {
        onDelete();
        popupStateClose();
      }}
      >
        {getIcon({CODE: "Delete", titleAccess: 'Delete'})}
        Delete
      </MenuItem>
      )}
      {onPrint && (
      <MenuItem onClick={() => {
        onPrint();
        popupStateClose();
      }}
      >
        {getIcon({CODE: "LocalPrintshop", titleAccess: 'Print'})}
        Print
      </MenuItem>
      )}
    </>
  );
};

CpMenuItems.defaultProps = {
  onDelete: undefined,
  onPrint: undefined,

};

const CpPaperComponent = (
  paperProps: PaperProps,
) => (
  <Draggable
    cancel={'[class*=\'MuiDialogContent-root\']'}
    positionOffset={{
      y: (!paperProps ? '-100vh' : '0'), x: '0',
    }}
  >
    <Paper {...paperProps} />
  </Draggable>
);

const ReSizeableBody = ({
  children, height, width, setHeight, setWidth,
}: {
    children: (JSX.Element | JSX.Element[])
    height: number,
    width: number,
    setHeight: Dispatch<SetStateAction<number>>,
    setWidth: Dispatch<SetStateAction<number>>,
  }): ReactNode & (JSX.Element | JSX.Element[]) => (
    <Resizable
      className='re-sizeable-dialog-auto-size'
      height={height}
      width={width}
      
      onResize={(event) => {
        setHeight(height + (event as unknown as tpDialogDragEventAxis).movementY);
        setWidth(width + (event as unknown as tpDialogDragEventAxis).movementX);
      }}
    >
      <DialogContent style={{ padding: 2 }}>
        <DialogContentText height={`${height}px`} width={`${width}px`}>
          {children}
        </DialogContentText>
      </DialogContent>
    </Resizable>
);

const DraggableDialog = (props: tpDialogBoxProps&tpDragDialog&tpDialogDefaultHeightWidthProps&{
  isDraggable?: boolean,
  isReSizeable?: boolean,
  isSimple?: boolean,
}): JSX.Element => {
  const [state, setState] = useState<tpDragDialogState>({ maximum: true, onTop: false });
  const {
    className, onDelete, onPrint, isReSizeable, isDraggable, children, defaultHeight, defaultWidth,
    isSimple, onBackdropClick,
  } = props;
  const [height, setHeight] = useState(defaultHeight || 350);
  const [width, setWidth] = useState(defaultWidth || 500);

  const DraggableDialogActions = () => (
    <div className='dialog-custom-actions'>
      {
        state.maximum
          ? (
            <PopupState
              variant='popover'
              popupId='draggable-popup-menu'
            >
              {(popupState) => (
                <>
                  <Button
                    disableRipple
                    variant='contained'
                    {...bindTrigger(popupState)}
                    style={{ background: 'none', boxShadow: 'none', transition: 'none' }}
                  >
                    {getIcon({CODE: "MoreVert", titleAccess: 'Show Settings'})}
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <CpMenuItems
                      onTop={state.onTop}
                      setState={setState}
                      onDelete={onDelete}
                      onPrint={onPrint}
                      popupStateClose={popupState.close}
                    />
                  </Menu>
                </>
              )}
            </PopupState>
          )
          : (
            <IconButton
              aria-label='show 4 new mails'
              color='inherit'
            >
              {getIcon({
                CODE: "OpenInFull", titleAccess: 'Maximize',
                onClick: () => {setState((prevState) => ({ ...prevState, maximum: true }))},
              })}
            </IconButton>
          )
      }
    </div>
  );
  return (
    <DialogBox
      {...props}
      onBackdropClick={onBackdropClick}
      hideBackdrop={state.onTop}
      removeBackdrop={state.onTop}
      className={`cp-draggable-dialog-root ${state.maximum ? 'content-display-block' : 'content-display-none'} ${className}`}
      PaperComponent={isDraggable ? CpPaperComponent : undefined}
      customActions={isSimple ? <></> : <DraggableDialogActions />}
    >
      { isReSizeable
        ? ReSizeableBody({
          children, height, width, setHeight, setWidth,
        })
        : children}
    </DialogBox>
  );
};

DraggableDialog.defaultProps = {
  onDelete: undefined,
  onPrint: undefined,
  isDraggable: false,
  isReSizeable: false,
  isSimple: false,
};

export default DraggableDialog;
