import React from 'react';
import { Button } from '../../../components/buttons/Button';
import DialogBox from '../DialogBox';
import { tpDialogBoxProps } from '../DialogBox';

const ConfirmationDialog = (props: tpDialogBoxProps&{
  onConfirm: () => void, onCancel: () => void, message?: string,
}): JSX.Element => {

  const {message, onCancel, onConfirm} = props;

  return (
    <DialogBox {...props} className="confirmation-dialog">
      <div className='message'>{message || "Please Confirm This Action..."}</div>
      <div className='buttons'>
        <Button
          label='Confirm'
          compId='button0'
          onClick={onConfirm}
        />
        <Button
          label='Discard'
          compId='button0'
          onClick={onCancel}
        />
      </div>
    </DialogBox>
  );
};

export default ConfirmationDialog;
