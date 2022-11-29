import React from 'react';

type tpProps = {
  title?: string,
  para?: string,
  image?: JSX.Element,
  defaultHeight?: string,
  defaultWidth?: string,
  className?: string,
}

const CardBox = ({image, para, title, className, defaultHeight, defaultWidth}: tpProps) => {
  return (
    <div className={`card-box ${className}`} style={{height: defaultHeight, width: defaultWidth}}>
    {image && <div className='image'>{image}</div>}
    {title && <div className='title'>{title}</div>}
    {para && <div className='para'>{para}</div>}
    </div>
  );
};

export default CardBox;
