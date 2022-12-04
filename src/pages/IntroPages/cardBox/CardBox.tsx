import React from 'react';

type tpProps = {
  title?: string,
  para?: string,
  image?: JSX.Element,
  defaultHeight?: string,
  defaultWidth?: string,
  className?: string,
  children?: JSX.Element,
}

const CardBox = ({image, para, title, className, children, defaultHeight, defaultWidth}: tpProps) => {
  return (
    <div className={`card-box ${className}`} style={{height: defaultHeight, width: defaultWidth}}>
    {image && <div className='image'>{image}</div>}
    {title && <div className='title'>{title}</div>}
    {para && <div className='para'>{para}</div>}
    {children && <div className='children'>{children}</div>}
    </div>
  );
};

export default CardBox;
