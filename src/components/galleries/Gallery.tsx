import React from 'react';
import { tpCompId } from '../../common/commonTypes';
import { tpGallery } from '../../common/componentTypes';
import GalleryOne from './galleryOne/GalleryOne';

const Gallery = (props: tpCompId&tpGallery): JSX.Element => {
  const isMobileMode = window.innerWidth < 550;
  const {id, items, className} = props;
  let selectedComp = <></>;
  switch(id) {
    case 'gallery-000':
      selectedComp = <GalleryOne {...props} />;
      break;
    default:
      selectedComp = <GalleryOne {...props} />;
  }
  return selectedComp;
};

export default Gallery;
