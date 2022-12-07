import React from 'react';
import { tpPageStructure } from '../../common/commonTypes';
import ExperiencePageZero from './experiencePageZero/ExperiencePageZero';

const ExperiencePage = ({page}: {page: tpPageStructure}) => {
  let pageById: JSX.Element = <></>;
  switch(page.pageId) {
    case '630d36aa-2aa4-11ed-a261-0242ac121001' :
      pageById = <ExperiencePageZero page={page} />
      break;
    default:
      pageById = <ExperiencePageZero page={page} />
    break;
  
  }
  return pageById;
};

export default ExperiencePage;
