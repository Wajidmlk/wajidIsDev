import React from 'react';
import { tpProgressBarProps } from '../../../common/componentTypes';


const ProgressBarZero = ({value, label, max, min}: tpProgressBarProps): JSX.Element => (
  <div className="progress-000">
    <div className='progress-label'>{label}</div><progress value={value} max={max || 100} /> 
  </div>
  );

export default ProgressBarZero;
