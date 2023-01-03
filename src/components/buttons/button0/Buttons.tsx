import React from 'react';
import { getIcon } from '../../../appUtils/AppUtilities';
import { tpCompProps } from '../../../common/commonTypes';

export const Button0 = ({ className, onClick, id, label, height, width, icon }: tpCompProps): JSX.Element => (
  <div id={id} onClick={onClick} className={`button-0 ${className}`} style={{height, width}}>
    {icon ? getIcon({CODE: icon, titleAccess: label, onClick}) : ""} &nbsp; {label || 'Click'}
  </div>    
);

export const Button1 = ({ className, onClick, id, label, height, width, icon }: tpCompProps): JSX.Element => (
  <button
    id={id}
    onClick={onClick}
    className={`button-1 ${className}`}
    type='button'
    style={{height, width}}
  >
    {icon ? getIcon({CODE: icon, titleAccess: label, onClick}) : ""} &nbsp; {label || 'Click'}
  </button>  
);

export const Button2 = ({ className, onClick, id, label, height, width, icon }: tpCompProps): JSX.Element => (
  <div className={`button-2 ${className}`} id={id} style={{height, width}}>
  <button className='learn-more' onClick={onClick}>
    <span className='circle' aria-hidden='true'>
      <span className='icon arrow'></span>
    </span>
    <span className='button-text'>
      {icon ? getIcon({CODE: icon, titleAccess: label, onClick}) : ""} &nbsp; {label || 'Click'}
    </span>
  </button>
</div> 
);

export const Button3 = ({ className, onClick, id, label, height, width, icon }: tpCompProps): JSX.Element => (
  <button
    className={`button-3 ${className}`}
    id={id}
    onClick={onClick}
    style={{height, width}}
  >
    {icon ? getIcon({CODE: icon, titleAccess: label, onClick}) : ""} &nbsp; {label || 'Click'}
  </button>
);
