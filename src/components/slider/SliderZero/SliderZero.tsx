import React from 'react';
import { useState } from 'react';
import { getIcon } from '../../../appUtils/AppUtilities';
import { tpSliderParams } from '../../../common/componentTypes';


const SliderZero = ({data, hideArrows}:tpSliderParams) => {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <section className='slider-000'>
      { !!hideArrows && <>
          {getIcon({CODE: "ArrowBackIosNew", className:'left-arrow', onClick: prevSlide})}
          {getIcon({CODE: "ArrowForwardIos", className:'right-arrow', onClick: nextSlide})}
        </>
      }
      {data.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};
export default SliderZero;
