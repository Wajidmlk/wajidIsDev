import React from 'react';
import { tpGallery } from '../../../common/componentTypes';

const ServiceMakeRows = ({items, noOfRows}: tpGallery) => {
  const table: JSX.Element[] = [];
  const tableRows: JSX.Element[] = items.map(({id, src, value}) => ( 
    <div key={id} className ="box">
      <img src={src} />
      <span>{value}</span>
    </div>
  ));
  const dataInRow = Math.round(tableRows.length / noOfRows);
    for(let x = 0; x < noOfRows; x++) {
      table.push(<div className="container">{
        tableRows.splice(0, dataInRow > tableRows.length ? tableRows.length : dataInRow)
      }</div>);
    }
  return <>{table}</>;
}

const GalleryTwo = (props: tpGallery): JSX.Element => {

  return (
    <div className='gallery-002'>
      <ServiceMakeRows {...props} />
    </div>    
  );
};

export default GalleryTwo;
