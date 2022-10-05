import React, { useState } from 'react';
import { tpCompId } from '../../common/commonTypes';
import { tpFooterState } from '../../common/componentTypes';
import FooterZero from './footerZero/FooterZero';

const Footer = ({id}: tpCompId): JSX.Element => {
  const [state, setState] = useState<tpFooterState>({
    items: [
      {id: "home", paceHolder: "home", parentId: ""},
      {id: "page1Info", paceHolder: "page 1", parentId: ""},
      {id: "page2Info", paceHolder: "page 2", parentId: ""}, 
      {id: "page3Info", paceHolder: "page 3", parentId: ""}, 
    ],
  });


  let footer = <></>;
  switch(id) {
    case "footer-000":
      footer = <FooterZero state={state}/>;
      break;
    default:
      footer = <FooterZero state={state}/>;
  }
  return footer;
};

export default Footer;
