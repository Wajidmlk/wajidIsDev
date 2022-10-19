import React, { useState } from 'react';
import { Button } from '../../components/buttons/Button';
import DialogBox from '../dialogBox/DialogBox';
import DraggableDialog from '../dialogBox/draggableDialog/DraggableDialog';
import { Toast } from '../reactToast/ReactToast';
type tpProps = {
  children: JSX.Element | JSX.Element[],
}


const FeaderContainer = ({children}: tpProps): JSX.Element => {
  const [t, sT] = useState<boolean>(false);
  return (
    <div className='footers'>
      {children}
      <div className='sign-in-box'>
        <Button
          label='Login'
          onClick={() => {Toast("Successfully Logged-In", "success"); sT(true)}}
          compId='button3'
        />
      </div>
      {
        t && (
          <DraggableDialog

            open={t}
            size="xl"
            defaultWidth={500}
            onDelete={() => {Toast("Feature Under Progress....", "info")}}
            onPrint={() => {Toast("Feature Under Progress....", "info")}}
            isResizeable
            isDraggable
            hideBackdrop
            title="Notes"
            onClose={() => {
              sT(false)
            }}
            className="cp-advance-notes-dialog"
          >
            <p>HAHAHAHAHA</p>
          </DraggableDialog>
        )
      }
    </div>
  );
};

export default FeaderContainer;
