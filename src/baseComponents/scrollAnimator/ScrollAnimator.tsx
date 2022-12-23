import React, { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Button } from '../../components/buttons/Button';
import DialogBox from '../dialogBox/DialogBox';
import DraggableDialog from '../dialogBox/draggableDialog/DraggableDialog';
import { Toast } from '../reactToast/ReactToast';
type tpProps = {
  children: JSX.Element | JSX.Element[],
  delay?: number,
  duration?: number,
  animateIn?: string,
  animateOnce?: boolean,
}


const ScrollAnimator = ({children, animateIn, delay, duration, animateOnce}: tpProps): JSX.Element => <AnimationOnScroll
    animateIn={animateIn}
    delay={delay}
    duration={duration}
    animateOnce={animateOnce}
    className='scroll-animator'
  >
    {children}
</AnimationOnScroll>

ScrollAnimator.defaultProps = {
  delay: 0,
  duration: undefined,
  animateIn: "animate__fadeIn",
  animateOnce: false,
}

export default ScrollAnimator;
