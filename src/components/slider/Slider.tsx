import React from 'react';
import { tpCompId } from '../../common/commonTypes';
import SliderZero from './SliderZero/SliderZero';

const Slider = (props: tpCompId): JSX.Element => {
  let selectedSlider = <></>;
  switch(props.id) {
    case 'slider0':
      selectedSlider = <SliderZero />;
      break;
    default:
      selectedSlider = <SliderZero />;
  }
  return selectedSlider;
};

export default Slider;
