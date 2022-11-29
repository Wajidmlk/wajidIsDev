import React from 'react';
import { tpPageStructure } from '../../common/commonTypes';
import ShowcasePageZero from './showcasePageZero/ShowcasePageZero';

const ShowcasePage = ({page}: {page: tpPageStructure}) => {
  let pageById: JSX.Element = <></>;
  switch(page.id) {
    case '630d36aa-2aa4-11ed-a261-0242ac121001' :
      pageById = <ShowcasePageZero page={page} />
      break;
    default:
      pageById = <ShowcasePageZero page={page} />
    break;
  
  }
  return pageById;
};

export default ShowcasePage;
