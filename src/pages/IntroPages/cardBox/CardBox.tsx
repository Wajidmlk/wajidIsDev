import React from 'react';
import { MUI_ICON, tpIconCODE } from "../../../appUtils/AppUtilities";

type tpProps = {
  title?: string,
  para?: string,
  image?: {type: "icon" | "element", element: tpIconCODE|JSX.Element},
  defaultHeight?: string,
  defaultWidth?: string,
  className?: string,
  children?: JSX.Element,
}

const CardBox = ({image, para, title, className, children, defaultHeight, defaultWidth}: tpProps) => {
  return (
    <div className={`card-box ${className}`} style={{height: defaultHeight, width: defaultWidth}}>
    {image && <div className='image'>{
      image.type === "icon" ? MUI_ICON({CODE: image.element as tpIconCODE}) : image.element
    }</div>}
    {title && <div className='title'>{title}</div>}
    {para && <div className='para'>{para}</div>}
    {children && <div className='children'>{children}</div>}
    </div>
  );
};

export default CardBox;
