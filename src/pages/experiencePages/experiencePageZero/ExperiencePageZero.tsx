import React from 'react';
import { useAppStateContext } from '../../../appUtils/AppState';
import { tpPageStructure } from '../../../common/commonTypes';
import { tpExperienceState } from '../../../common/componentTypes';
import ExperienceBox from '../../../components/cards/experienceBox/ExperienceBox';
import BannerStripe from '../../../components/stripes/bannerStripe/BannerStripe';

const ExperiencePageZero = (props: {page: tpPageStructure, state: tpExperienceState[]}) => {
  const {isMobileMode} = useAppStateContext();
  const { style, pageId } = props.page;
  return <BannerStripe
    bannerMessage='Recent CV'
    width={isMobileMode ? 10 : 20}
    raised
    left
  >
    <div
      id={pageId}
      className={
        `experiencePage-000 ${style.backgroundImage ? 'page-backgroundImage' : ''}`}
      style={style}
    >
      {props.state.map(({heading, data}, i) => 
        <ExperienceBox key={`${i}-exp`} id='expBox000' heading={heading} data={data}/>      
      )}
    </div>
  </BannerStripe>
};

export default ExperiencePageZero;
