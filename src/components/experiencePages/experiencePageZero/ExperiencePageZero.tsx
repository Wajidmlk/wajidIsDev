import React from 'react';
import { tpPageStructure } from '../../../common/commonTypes';
const ExperiencePageZero = ({page}: {page: tpPageStructure}) => {
  const { style, id } = page;
  return (
    <div
      id={id}
      className={
        `experiencePage-000 ${style.backgroundImage ? 'page-backgroundImage' : ''}`}
      style={style}
    >
      <div style={{height: "200px", width: "90%", border: "1px solid black"}}>

      </div>
    </div>
  );
};

export default ExperiencePageZero;
