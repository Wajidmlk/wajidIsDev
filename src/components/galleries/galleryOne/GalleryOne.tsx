import React from 'react';
import { tpGallery } from '../../../common/componentTypes';

const GalleryOne = ({items}: tpGallery): JSX.Element => {
  return (
    <div className='gallery-001'>
      <div className='gallery'>
        {items.map((item, i) => {
          const {id, src, value} = item;
          //<div className="gallery__column">
         return <a target="_blank" className="gallery__link">
            <figure className="gallery__thumb">
              <img src={src} alt={value} className="gallery__image" />
              <figcaption className="gallery__caption">{value}</figcaption>
            </figure>
          </a>
          //</div>
        })}
      </div>    
    </div>    
  );
};

export default GalleryOne;
