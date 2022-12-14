import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { getIcon } from '../../../appUtils/AppUtilities';
import { ToastWIP } from '../../../baseComponents/reactToast/ReactToast';
import ScrollAnimator from '../../../baseComponents/scrollAnimator/ScrollAnimator';
import { tpProduct, tpProductsState } from '../../../common/componentTypes';
import { Button } from '../../../components/buttons/Button';
import Slider from '../../../components/slider/Slider';

type tpProps = {
  dataRow: tpProduct, seqNo: number, state:tpProductsState,
  setState: Dispatch<SetStateAction<tpProductsState>>,
  onBannerClick?: () => void,
};

const onHoverOrClickBadges = (
  seqNo: number, value: boolean, type: "check"|"show", badgeNo: number,state: tpProductsState,
  setState: Dispatch<SetStateAction<tpProductsState>>,
) => {
  if(type==="show") {
    ToastWIP();
    return;
  }
  const copyData = {...state};
  const badges = copyData.data[seqNo].badges;

  //if(type === "check") badges[badgeNo].check = value;
  //else 
  badges.forEach((badge, i) => {
    badge[type] = (badgeNo === i) ? value : false;
  });
  
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

 const ViewMode = ({dataRow: {
    badges, slides, toggleView,
  }}: tpProps) => {
  let comp = <></>;
  switch((badges.find(badge => badge.show))?.name) {
    case "Gallery":
      comp = slides ? <div className={`images-slider ${!toggleView && "z-index-minus-1"}`}>
        <Slider
            id='slider0'
            type={slides.type}
            data={slides.data}
            hideArrows={toggleView}
            slideShow={slides.slideShow}
          />
        </div> : <></>;
      break;
    case "Description":
      comp = <div className='description-mode'>HI</div>;
      break;
  }
  return comp;
};

const ProductContainer = (props : tpProps) => {
  const {seqNo, dataRow: {
    badges, sideBanner, className, toggleSize, toggleView, description,
  }, state, setState, onBannerClick} = props;
  return (
    <ScrollAnimator
      animateIn={`animate__slideIn${seqNo % 2 === 0 ? "left" : "right"}`}
      delay={150 * seqNo}
      className={`product-container ${className}`}
      animateOnce
    >
      <div 
        onMouseEnter={() => onHoverProduct(seqNo, true, "toggleView", state, setState)}
      >
        {(!toggleView && !toggleSize) && <div className='upper-description'>
          <p>{description}</p>
        </div>}
        <ViewMode {...props} />
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
              const {id, name, show, check, icon} = badge;
              const Icon = icon ? getIcon({CODE: icon, style:{height: "18px"}}) : "";
              return (
              <div
                id={id}
                key={id}
                className='badge'
                onMouseEnter={() => onHoverOrClickBadges(seqNo, true, "check", badgeNo, state, setState)}
                onMouseLeave={() => onHoverOrClickBadges(seqNo, false, "check", badgeNo, state, setState)}
                onClick={() => onHoverOrClickBadges(seqNo, !show, "show", badgeNo, state, setState)}
              >
                { !(check || show) ?
                  <div>{Icon ? Icon : name.charAt(0).toLocaleUpperCase()}</div> : 
                  <div style={{display: "flex", height: "18px"}}><>{Icon}</> <>{name}</></div>
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
    </ScrollAnimator>
  );
}

export default ProductContainer;
