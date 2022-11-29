import React from 'react';
import { tpPageStructure } from '../../../common/commonTypes';
const ShowcasePageZero = ({page}: {page: tpPageStructure}) => {
  const { style, id } = page;
  return (
    <div
      id={id}
      className={
        `showcasePage-000 ${style.backgroundImage ? 'page-backgroundImage' : ''}`}
      style={style}
    >
      <div style={{height: "200px", width: "100%", border: "1px solid black"}}>

      </div>
    </div>
  );
};

export default ShowcasePageZero;
