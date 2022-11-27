import React from 'react';
import { tpCompId } from '../../common/commonTypes';
import { tpProgressBarProps } from '../../common/componentTypes';
import ProgressBarZero from './progressBarZero/ProgressBarZero';
const ProgressBar = (props: tpCompId&tpProgressBarProps): JSX.Element => {
  let selectedBar = <></>;
  switch(props.id) {
    case '630d36aa-2aa4-11ed-a261-0242ac121000':
      selectedBar = <ProgressBarZero {...props}/>;
      break;
    case '630d36aa-2aa4-11ed-a261-0242ac121001':
      selectedBar = <ProgressBarZero {...props}/>;
      break;
    default:
      selectedBar = <ProgressBarZero {...props}/>;
  }
  return selectedBar;
};

export default ProgressBar;
