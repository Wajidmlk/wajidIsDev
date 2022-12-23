import React from 'react';
import { tpCompId } from '../../common/commonTypes';
import { tpGallery } from '../../common/componentTypes';
import GalleryOne from './galleryOne/GalleryOne';
import GalleryTwo from './galleryTwo/GalleryTwo';

const Gallery = (props: tpCompId&tpGallery): JSX.Element => {
  const isMobileMode = window.innerWidth < 550;
  const {id, items, className} = props;
  let selectedComp = <></>;
  switch(id) {
    case 'gallery-001':
      selectedComp = <GalleryOne {...props} />;
      break;
    case 'gallery-002':
      selectedComp = <GalleryTwo {...props} />;
      break;
    default:
      selectedComp = <GalleryOne {...props} />;
  }
  return selectedComp;
};

export default Gallery;
