import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
type tpProps = {
  children: JSX.Element | JSX.Element[],
  delay?: number,
  duration?: number,
  className?: string,
  animateIn?: string,
  animateOnce?: boolean,
}


const ScrollAnimator = ({
  children, animateIn, delay, className, duration, animateOnce,
}: tpProps): JSX.Element => <AnimationOnScroll
    animateIn={animateIn}
    delay={delay}
    duration={duration}
    animateOnce={animateOnce}
    className={`scroll-animator ${className}`}
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
