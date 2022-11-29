import React from 'react';
import { tpPageStructure } from '../../../common/commonTypes';
import ProductContainer from '../productContainer/ProductContainer';
const ShowcasePageZero = ({page}: {page: tpPageStructure}) => {
  const { style, id } = page;
  return (
    <div
      id={id}
      className={
        `showcasePage-000 ${style.backgroundImage ? 'page-backgroundImage' : ''}`}
      style={style}
    >
      <div className='showcase-container'>
        {
          ["","","","","","","",""].map(item => (<ProductContainer />))
        }
      </div>
    </div>
  );
};

export default ShowcasePageZero;
