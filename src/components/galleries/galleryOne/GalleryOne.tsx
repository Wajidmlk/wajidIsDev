import React from 'react';
import { tpGallery } from '../../../common/componentTypes';

const ServiceMakeRows = ({items, noOfRows}: tpGallery) => {
  const table: JSX.Element[] = [];
  const tableRows: JSX.Element[] = items.map(({id, src, value}) => (
    <a key={id} target="_blank" className="gallery__link">
      <figure className="gallery__thumb">
        <img src={src} alt={value} className="gallery__image" />
        <figcaption className="gallery__caption">{value}</figcaption>
      </figure>
    </a>
  ));
  const dataInRow = Math.round(tableRows.length / noOfRows);
    for(let x = 0; x < noOfRows; x++) {
      table.push(<div className="gallery__column">{
        tableRows.splice(0, dataInRow > tableRows.length ? tableRows.length : dataInRow)
      }</div>);
    }
  return <>{table}</>;
}

const GalleryOne = (props: tpGallery): JSX.Element => {

  return (
    <div className='gallery-001'>
      <div className='gallery'>
        <ServiceMakeRows {...props} />
      </div>    
    </div>    
  );
};

export default GalleryOne;
