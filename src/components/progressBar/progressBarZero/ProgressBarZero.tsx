import React from 'react';
import { tpProgressBarProps } from '../../../common/componentTypes';


const ProgressBarZero = ({value, label, max, min}: tpProgressBarProps): JSX.Element => (
  <div className="progress-000">
    <div className='grid' style={{gridTemplateColumns: '22% 78%'}}>
      <div className='box progress-label'><p>{label}</p></div>
      <div className='box progress-bar'>
        <progress className='bar' value={value} max={max || 100} />
        <div className='bar-percent'><p>{`${value}%`}</p></div>
      </div>
    
    </div>
  </div>
  );

export default ProgressBarZero;
