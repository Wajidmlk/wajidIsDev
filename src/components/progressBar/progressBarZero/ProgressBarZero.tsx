import React from 'react';
import { tpProgressBarProps } from '../../../common/componentTypes';


const ProgressBarZero = ({value, label, max, min, key}: tpProgressBarProps): JSX.Element => (
  <div className="progress-000" key={key}>
    <div className='grid'>
      <div className='box progress-label' style={{width: '15%'}}><p>{label}</p></div>
      <div className='box progress-bar' style={{width: '70%'}}>
        <progress className='bar' value={value} max={max || 100} />
        <div className='bar-percent'><p>{`${value}%`}</p></div>
      </div>
    
    </div>
  </div>
  );

export default ProgressBarZero;
