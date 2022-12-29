import React from 'react';
import { tpCompId } from '../../common/commonTypes';
import { tpGallery } from '../../common/componentTypes';
import {
  ServiceGallery1Maker, ServiceGallery2Maker, ServiceGallery3Maker,
} from './serviceGallery';

const Gallery = (props: tpCompId&tpGallery): JSX.Element => {
  const {id} = props;
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


/*
<Gallery id='gallery-003' noOfRows={1} items={[
    {id: "9", src: "https://source.unsplash.com/_cvwXhGqG-o/300x300", value: "test 1"},
    {id: "8", src: "https://source.unsplash.com/AHBvAIVqk64/300x500", value: "test 2"},
    {id: "7", src: "https://source.unsplash.com/VLPLo-GtrIE/300x300", value: "test 3"},
    {id: "6", src: "https://source.unsplash.com/AR7aumwKr2s/300x300", value: "test 4"},
    {id: "5", src: "https://source.unsplash.com/dnL6ZIpht2s/300x300", value: "test 5"},
    {id: "4", src: "https://source.unsplash.com/tV_1sC603zA/300x500", value: "test 6"},
    {id: "3", src: "https://source.unsplash.com/Xm9-vA_bhm0/300x500", value: "test 7"},
    {id: "2", src: "https://source.unsplash.com/NTjSR3zYpsY/300x300", value: "test 8"},
    {id: "1", src: "https://source.unsplash.com/2JH8d3ChNec/300x300", value: "test 9"},
  ]}
/>
*/