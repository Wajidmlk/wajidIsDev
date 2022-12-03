import React, { Dispatch, SetStateAction } from 'react';
import { tpProduct, tpProductsState } from '../../../common/componentTypes';
import { Button } from '../../../components/buttons/Button';
import Slider from '../../../components/slider/Slider';

 const onHoverOrClickBadges = (
  seqNo: number, value: boolean, type: "check"|"show", badgeNo: number,state: tpProductsState,
  setState: Dispatch<SetStateAction<tpProductsState>>,
) => {
  const copyData = {...state};
  const badges = copyData.data[seqNo].badges;

  if(type === "check") badges[badgeNo].check = value;
  else badges.forEach((badge, i) => badge.show = (badgeNo === i) ? !badge.show : false);

  copyData.data[seqNo].badges = badges;
  setState(copyData);
}

const onHoverProduct = (
   seqNo: number, value: boolean, type: "toggleView"|"toggleSize", state: tpProductsState,
   setState: Dispatch<SetStateAction<tpProductsState>>,
 ) => {
  const copyData = {...state};
  copyData.data[seqNo][type] = value;
  setState(copyData);
  //if(value) setTimeout(() => onHoverProduct(seqNo, false, type, state, setState), 30000);
 }
const ProductContainer = ({seqNo, dataRow: {
  badges, sideBanner, className, toggleSize, toggleView,
}, state, setState, onBannerClick}: {
  dataRow: tpProduct, seqNo: number, state:tpProductsState,
  setState: Dispatch<SetStateAction<tpProductsState>>,
  onBannerClick?: () => void,
}) => (
  <div
    className={`product-container ${className}`}
    onMouseEnter={() => onHoverProduct(seqNo, true, "toggleView", state, setState)}
  >
    {(!toggleView && !toggleSize) && <div className='upper-description'></div>}
    <div className={`images-slider ${!toggleView && "z-index-minus-1"}`}><Slider id='slider0' /></div>
    { sideBanner &&
      <div className={`side-strip ${!toggleView && "visibility-hidden"}`} onClick={onBannerClick}>
        <div className='strip-corner-left'></div>
        <div className='strip-value'>{sideBanner.value}</div>
        <div className='strip-corner-right'></div>
      </div>
    }
    {(badges && badges.length > 0) && <div className={`badges ${!toggleView && "visibility-hidden"}`}>
      {
        badges.map((badge, badgeNo) => {
          const {id, name, show, check, iconName} = badge;
          return (
          <div
            id={id}
            key={id}
            className='badge'
            onMouseEnter={() => onHoverOrClickBadges(seqNo, true, "check", badgeNo, state, setState)}
            onMouseLeave={() => onHoverOrClickBadges(seqNo, false, "check", badgeNo, state, setState)}
            onClick={() => onHoverOrClickBadges(seqNo, false, "show", badgeNo, state, setState)}
          >
            { !(check || show) ?
              <div>{iconName ? iconName : name.charAt(0).toLocaleUpperCase()}</div> : 
              <div>{name}</div>
            }
          </div>
        )})
      }
    </div>}
    <div className='toggle-button'>
      <Button
        className='toggle-product-button'
        compId='button3'
        label={ toggleSize ? 'Minimize' : 'Maximize'}
        onClick={() => {
          const copyData = {...state};
          copyData.data[seqNo].className = toggleSize ?
            copyData.data[seqNo].className.replace("product-full-screen", "") :
            copyData.data[seqNo].className.replace("", "product-full-screen");
          copyData.data[seqNo].toggleSize = !toggleSize;
          setState(copyData);
        }}
      />
    </div>
  </div>
);

export default ProductContainer;
