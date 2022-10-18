import React from 'react';
import { Button } from '../../components/buttons/Button';
import { Toast } from '../reactToast/ReactToast';
type tpProps = {
  children: JSX.Element | JSX.Element[],
}


const FeaderContainer = ({children}: tpProps): JSX.Element => {
  return (
    <div className='footers'>
      {children}
      <div className='sign-in-box'>
        <Button
          label='Login'
          onClick={() => {Toast("Successfully Logged-In", "success")}}
          compId='button3'
        />
      </div>
    </div>
  );
};

export default FeaderContainer;
