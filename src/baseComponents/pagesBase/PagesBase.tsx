import * as React from 'react';
import HeaderContainer from '../headerContainer/HeaderContainer';
import FooterContainer from '../footerContainer/FooterContainer';
import NavBar from '../../components/navs/NavBar';
import { tpAppStructure } from '../../common/commonTypes';
import Footer from '../../components/footers/Footer';
type tpProps = {
  Component: JSX.Element[],
  appStructure: tpAppStructure,
  multipage?: boolean,
  key: string,
}

const PagesBase = ({Component, multipage, appStructure, key}: tpProps): JSX.Element => {
  if(multipage) return (
    <div key={key} id={key}>
      <HeaderContainer children={<NavBar id={appStructure.nav.id} />}/>
      <div className='pages-base-root'>{Component}</div>
      <FooterContainer children={<Footer id={appStructure.footer.id} />} />
    </div>
  );
  return <div key={key} id={key} className='pages-base-root'>{Component}</div>;
};

PagesBase.defaultProps = {
  multipage: false,
};

export default PagesBase;
