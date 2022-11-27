import React from 'react';

type tpProps = {
  title?: string,
  para?: string,
  image?: JSX.Element,
  defaultHeight?: number,
  defaultWidth?: number,
}

const CardBox = ({image, para, title, defaultHeight, defaultWidth}: tpProps) => {
  return (
    <div className='card-box' style={{height: defaultHeight, width: defaultWidth}}>
    {image && <div className='image'>{image}</div>}
    {title && <div className='title'>{title}</div>}
    {para && <div className='para'>{para}</div>}
    </div>
  );
};

export default CardBox;
