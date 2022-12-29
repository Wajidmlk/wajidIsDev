import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const Toast = (
  msg: string,
  type?: 'error' | 'success' | 'info' | 'warning',
): void => {
  toast(msg, { type: type || 'default' });
};

export const ToastWIP = (): void => {
  Toast("Work in Progress...");
};


const ReactToast = ():JSX.Element => (
  <ToastContainer
    position='bottom-right'
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    className='react_toast_comp_root'
  />
);

export default ReactToast;
