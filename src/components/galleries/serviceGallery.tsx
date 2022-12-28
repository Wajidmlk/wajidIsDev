import { tpGallery } from "../../common/componentTypes";

export const ServiceGallery1Maker = ({ items, noOfRows }: tpGallery) => {
  const table: JSX.Element[] = [];
  const tableRows: JSX.Element[] = items.map(({ id, src, value }) => (
    <a key={id} target="_blank" className="gallery__link">
      <figure className="gallery__thumb">
        <img src={src} alt={value} className="gallery__image" />
        <figcaption className="gallery__caption">{value}</figcaption>
      </figure>
    </a>
  ));
  const dataInRow = Math.round(tableRows.length / noOfRows);
  for (let x = 0; x < noOfRows; x++) {
    table.push(<div className="gallery__column">{
      tableRows.splice(0, dataInRow > tableRows.length ? tableRows.length : dataInRow)
    }</div>);
  }
  return <>{table}</>;
}


export const ServiceGallery2Maker = ({items, noOfRows}: tpGallery) => {
  const table: JSX.Element[] = [];
  const tableRows: JSX.Element[] = items.map(({id, src, value}) => ( 
    <div key={id} className ="box">
      <img
        src={src}
        alt={value}
      />
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

export const ServiceGallery3Maker = ({items, noOfRows}: tpGallery) => {
  const table: JSX.Element[] = [];
  const tableRows: JSX.Element[] = items.map(({id, src, value}) => ( 
    <img
      key={id}
      src={src}
      alt={value}
    />
  ));
  const dataInRow = Math.round(tableRows.length / noOfRows);
    for(let x = 0; x < noOfRows; x++) {
      table.push(<div className="wrapper">{
        tableRows.splice(0, dataInRow > tableRows.length ? tableRows.length : dataInRow)
      }</div>);
    }
  return <>{table}</>;
}
