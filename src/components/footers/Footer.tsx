import React, { useState } from 'react';
import { tpCompId } from '../../common/commonTypes';
import { tpFooterState } from '../../common/componentTypes';
import FooterZero from './footerZero/FooterZero';

const Footer = ({id}: tpCompId): JSX.Element => {
  const [state, setState] = useState<tpFooterState>({
    items: [
      {id: 'home', placeholder: 'home', parentId: ''},
      {id: 'page1Info', placeholder: 'page 1', parentId: ''},
      {id: 'page2Info', placeholder: 'page 2', parentId: ''}, 
      {id: 'page3Info', placeholder: 'page 3', parentId: ''}, 
    ],
  });


  let footer = <></>;
  switch(id) {
    case 'footer-000':
      footer = <FooterZero state={state}/>;
      break;
    default:
      footer = <FooterZero state={state}/>;
  }
  return footer;
};

export default Footer;
