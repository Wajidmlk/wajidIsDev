import React, { Dispatch, SetStateAction } from 'react';
import { tpProduct, tpProductsState } from '../../../common/componentTypes';


/*
const onHoverOrClickBadges = ({
  currentTarget: {id},
}: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, type: "show"|"hide") => {
  const hoveredBadge = document.getElementById(id);
  if(hoveredBadge?.className) {
    hoveredBadge.className = hoveredBadge.className + type;
  }
  if(parentElement) {
     const siblingsIds: string[] = [];
     let element: Element|null = parentElement?.firstElementChild;
     for(element = element; element !== null; ) {
      if(element?.id !== id) siblingsIds.push(element.id);
      element = element?.nextElementSibling;
     }
     if(siblingsIds.length && document) {

      if(ss?.className) 
        ss.className = ss.className + (" off");
    }
  }
  
}
*/
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
const ProductContainer = ({seqNo, dataRow: {
  badges, sideBanner,
}, state, setState, onBannerClick}: {
  dataRow: tpProduct, seqNo: number, state:tpProductsState,
  setState: Dispatch<SetStateAction<tpProductsState>>,
  onBannerClick?: () => void,
}) => {
 
  return (
    <div className='product-container'>
      { sideBanner && <div className='side-strip' onClick={onBannerClick}>
        <div className='strip-corner-left'></div>
        <div className='strip-value'>{sideBanner.value}</div>
        <div className='strip-corner-right'></div>
      </div>
      }
      <div className='badges'>
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
      </div>
      <div className='images-slider'></div>
      <div className='toggle-button'></div>
    </div>
  );
};

export default ProductContainer;
