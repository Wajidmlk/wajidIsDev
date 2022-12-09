import React from 'react';
import { tpPageStructure } from '../../common/commonTypes';
import FooterPageZero from './footerPageZero/FooterPageZero';


const FooterPage = ({page}: {page: tpPageStructure}) => {
  let pageById: JSX.Element = <></>;
  switch(page.pageId){
    case '621d36aa-2aa4-11ed-a261-0242ac121000' :
      pageById = <FooterPageZero page={page} />
      break;
    default:
      pageById = <FooterPageZero page={page} />
    break;
  
  }
  return pageById;
};

export default FooterPage;
