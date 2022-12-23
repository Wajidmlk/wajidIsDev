import React from 'react';
import { tpCompId } from '../../common/commonTypes';
import { tpGallery } from '../../common/componentTypes';
import {
  ServiceGallery1Maker, ServiceGallery2Maker, ServiceGallery3Maker,
} from './serviceGallery';

const Gallery = (props: tpCompId&tpGallery): JSX.Element => {
  const isMobileMode = window.innerWidth < 550;
  const {id, items, className} = props;
  let selectedComp = <></>;
  switch(id) {
    case 'gallery-001':
      selectedComp = <div className='gallery-001'>
        <div className='gallery'>
          <ServiceGallery1Maker {...props} />
        </div>    
      </div>;
      break;
    case 'gallery-002':
      selectedComp = <div className='gallery-002'>
      <ServiceGallery2Maker {...props} />
    </div>
      break;
    case 'gallery-003':
      selectedComp =  <div className='gallery-003'>
      <ServiceGallery3Maker {...props} />
    </div> 
      break;
    default:
      selectedComp = <div className='gallery-001'>
        <div className='gallery'>
          <ServiceGallery1Maker {...props} />
        </div>    
      </div>;
  }
  return selectedComp;
};

export default Gallery;
