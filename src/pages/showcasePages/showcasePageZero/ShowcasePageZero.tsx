import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { useAppStateContext } from '../../../appUtils/AppState';
import { ToastWIP } from '../../../baseComponents/reactToast/ReactToast';
import { tpPageStructure } from '../../../common/commonTypes';
import { tpProductsState } from '../../../common/componentTypes';
import BannerStripe from '../../../components/stripes/bannerStripe/BannerStripe';
import ProductContainer from '../productContainer/ProductContainer';
const ShowcasePageZero = ({page, state, setState}: {
  page: tpPageStructure,
  state: tpProductsState,
  setState: Dispatch<SetStateAction<tpProductsState>>,
}) => {
  const {isMobileMode} = useAppStateContext();
  const { style, pageId } = page;
  return <BannerStripe
    bannerMessage='Some Apps'
    width={isMobileMode ? 10 : 20}
    raised
    left
  >
    <div
      id={pageId}
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
              onBannerClick={() => ToastWIP()}
            />
          ))
        }
      </div>
    </div>
  </BannerStripe>;
};

export default ShowcasePageZero;
