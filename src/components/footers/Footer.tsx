import React, { useState } from 'react';
import { tpCompId, tpFooterData } from '../../common/commonTypes';
import { tpFooterState } from '../../common/componentTypes';
import FooterZero from './footerZero/FooterZero';

type tpProps = {data: tpFooterData[]};

const Footer = ({id, data}: tpProps&tpCompId): JSX.Element => {
  let footer = <></>;
  switch(id) {
    case 'footer-000':
      footer = <FooterZero state={data}/>;
      break;
    default:
      footer = <FooterZero state={data}/>;
  }
  return footer;
};

export default Footer;
