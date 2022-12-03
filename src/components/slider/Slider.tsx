import React from 'react';
import { tpCompId } from '../../common/commonTypes';
import { tpSliderParams } from '../../common/componentTypes';
import SliderZero from './SliderZero/SliderZero';

const Slider = (props: tpCompId&tpSliderParams): JSX.Element => {
  let selectedSlider = <></>;
  switch(props.id) {
    case 'slider0':
      selectedSlider = <SliderZero {...props}/>;
      break;
    default:
      selectedSlider = <SliderZero {...props}/>;
  }
  return selectedSlider;
};

export default Slider;
