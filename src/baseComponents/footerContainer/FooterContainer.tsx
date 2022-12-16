import React from 'react';
import { useState } from 'react';
import { Button } from '../../components/buttons/Button';
import DialogBox from '../dialogBox/DialogBox';
import DraggableDialog from '../dialogBox/draggableDialog/DraggableDialog';
import { Toast } from '../reactToast/ReactToast';
type tpProps = {
  children: JSX.Element | JSX.Element[],
}


const FooterContainer = ({children}: tpProps): JSX.Element => {
  const [openLoginDialog, setOpenLoginDialog] = useState<boolean>(false);
  return (
    <div className='footers'>
      {children}
      <div className='sign-in-box'>
        <Button
          label='Login'
          className='sign-in-button-hover-box'
          onClick={() => {
            Toast('Successfully Logged-In', 'success');
            setOpenLoginDialog(true);
          }}
          compId='button3'
        />
      </div>
      {
        openLoginDialog && (
          <DraggableDialog
            open={openLoginDialog}
            size='xl'
            title='Notes'
            isSimple
            defaultHeight={500}
            defaultWidth={500}
            onClose={() => {
              setOpenLoginDialog(false)
            }}
            className='cp-advance-notes-dialog'
          >
            <p>Login</p>
          </DraggableDialog>
        )
      }
    </div>
  );
};

export default FooterContainer;
