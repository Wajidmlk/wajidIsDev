import React from 'react';
import { tpCompProps } from '../../../common/commonTypes';

export const Button0 = ({ className, onClick, id, label }: tpCompProps): JSX.Element => (
  <a href="" id={id} onClick={onClick} className={`button-0 ${className}`}>
    {label || "Click"}
  </a>    
);

export const Button1 = ({ className, onClick, id, label }: tpCompProps): JSX.Element => (
  <button
    id={id}
    onClick={onClick}
    className={`button-1 ${className}`}
    type="button"
  >
    {label || "Click"}
  </button>  
);
