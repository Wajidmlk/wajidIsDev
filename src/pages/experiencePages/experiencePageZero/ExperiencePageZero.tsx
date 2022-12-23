import React from 'react';
import { tpPageStructure } from '../../../common/commonTypes';
import { tpExperienceState } from '../../../common/componentTypes';
import ExperienceBox from '../../../components/cards/experienceBox/ExperienceBox';

const ExperiencePageZero = (props: {page: tpPageStructure, state: tpExperienceState[]}) => {
  const { style, pageId } = props.page;
  return (
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
  );
};

export default ExperiencePageZero;
