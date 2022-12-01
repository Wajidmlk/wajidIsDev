import React, { Dispatch, SetStateAction } from 'react';
import { tpPageStructure } from '../../../common/commonTypes';
import { tpProductsState } from '../../../common/componentTypes';
import ProductContainer from '../productContainer/ProductContainer';
const ShowcasePageZero = ({page, state, setState}: {
  page: tpPageStructure,
  state: tpProductsState,
  setState: Dispatch<SetStateAction<tpProductsState>>,
}) => {
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
          state.data.map((item, i) => (
            <ProductContainer
              seqNo={i}
              dataRow={item}
              state={state}
              setState={setState}
              onBannerClick={() => {}}
            />))
        }
      </div>
    </div>
  );
};

export default ShowcasePageZero;
