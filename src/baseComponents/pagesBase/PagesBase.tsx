import * as React from 'react';
import HeaderContainer from '../headerContainer/HeaderContainer';
import FooterContainer from '../footerContainer/FooterContainer';
import './pagesBase.scss';
import NavBar from '../../components/navs/NavBar';
import { tpAppStructure } from '../../common/commonTypes';
import Footer from '../../components/footers/Footer';
type tpProps = {
  Component: JSX.Element[],
  appStructure: tpAppStructure,
  multipage?: boolean,
}

const PagesBase = ({Component, multipage, appStructure}: tpProps): JSX.Element => {
  if(multipage) return (
    <>
      <HeaderContainer children={<NavBar id={appStructure.nav.id} />}/>
      <div className='pages-base-root'>{Component}</div>
      <FooterContainer children={<Footer id={appStructure.footer.id} />} />
    </>
  );
  return (
    <>
      <div className='pages-base-root'>{Component}</div>
    </>
  );
};

PagesBase.defaultProps = {
  multipage: false,
};

export default PagesBase;
