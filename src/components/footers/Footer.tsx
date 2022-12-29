import React from 'react';
import { tpCompId, tpFooter } from '../../common/commonTypes';
import InformationStripe from '../stripes/informationStripe/InformationStripe';
import FooterZero from './footerZero/FooterZero';

const Footer = ({id, data, visibility}: tpFooter&tpCompId): JSX.Element => {
  if(visibility === "hidden") return <></>;
  
  let footer = <></>;
  switch(id) {
    case 'footer-000':
      footer = <FooterZero state={data} />;
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
