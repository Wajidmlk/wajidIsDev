import React from 'react';
import { tpPageStructure } from '../../../common/commonTypes';
import { tpExperienceState } from '../../../common/componentTypes';
import ExperienceBox from '../../../components/cards/experienceBox/ExperienceBox';

const ExperiencePageZero = (props: tpExperienceState&{page: tpPageStructure}) => {
  const { style, pageId } = props.page;
  return (
    <div
      id={pageId}
      className={
        `experiencePage-000 ${style.backgroundImage ? 'page-backgroundImage' : ''}`}
      style={style}
    >
      <ExperienceBox id='expBox000' heading={props.heading} data={props.data}/>
    </div>
  );
};

export default ExperiencePageZero;
