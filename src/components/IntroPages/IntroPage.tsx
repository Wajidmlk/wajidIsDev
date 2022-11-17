import React from 'react';
import { tpPageStructure } from '../../common/commonTypes';
import IntroPageZero from './introPageZero/IntroPageZero';

const IntroPage = ({page}: {page: tpPageStructure}) => {
  let pageById: JSX.Element = <></>;
  switch(page.id) {
    case '630d36aa-2aa4-11ed-a261-0242ac121001' :
      pageById = <IntroPageZero page={page} />
      break;
    default:
      pageById = <IntroPageZero page={page} />
    break;
  
  }
  return pageById;
};

export default IntroPage;
