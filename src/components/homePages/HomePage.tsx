import React from 'react';
import { tpPageStructure } from '../../common/commonTypes';
import HomePageZero from './homePageZero/HomePageZero';

const HomePage = ({page}: {page: tpPageStructure}) => {
  let pageById: JSX.Element = <></>;
  switch(page.pageCatId) {
    case '630d36aa-2aa4-11ed-a261-0242ac121000' :
      pageById = <HomePageZero page={page} />
      break;
    default:
      pageById = <HomePageZero page={page} />
    break;
  
  }
  return pageById;
};

export default HomePage;
