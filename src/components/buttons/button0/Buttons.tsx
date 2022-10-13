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

export const Button2 = ({ className, onClick, id, label }: tpCompProps): JSX.Element => (
  <div className={`button-2 ${className}`} id={id}>
  <button className="learn-more" onClick={onClick}>
    <span className="circle" aria-hidden="true">
      <span className="icon arrow"></span>
    </span>
    <span className="button-text">{label}</span>
  </button>
</div> 
);
