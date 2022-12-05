import React from 'react';
import { tpCompId, tpFooterData } from '../../common/commonTypes';
import InformationStripe from '../informationStripe/InformationStripe';
import FooterZero from './footerZero/FooterZero';

type tpProps = {data: tpFooterData[]};

const Footer = ({id, data}: tpProps&tpCompId): JSX.Element => {
  let footer = <></>;
  switch(id) {
    case 'footer-000':
      footer = <FooterZero state={data}/>;
      break;
    case 'footer-001':
      footer = <InformationStripe data={data} />;
      break;
    default:
      footer = <FooterZero state={data}/>;
  }
  return footer;
};

export default Footer;
