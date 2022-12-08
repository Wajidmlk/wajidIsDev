import * as React from 'react';
import HeaderContainer from '../headerContainer/HeaderContainer';
import FooterContainer from '../footerContainer/FooterContainer';
import NavBar from '../../components/navs/NavBar';
import Footer from '../../components/footers/Footer';
import { useAppStateContext } from '../../appUtils/AppState';
type tpProps = {
  Component: JSX.Element[],
  key: string,
}

const PagesBase = ({Component, key}: tpProps): JSX.Element => {
  const {nav, footer, multiPage} = useAppStateContext();
  if(multiPage) return (
    <div key={key} id={key}>
      <HeaderContainer children={<NavBar id={nav.id} />}/>
      <div className='pages-base-root'>{Component}</div>
      <FooterContainer children={<Footer {...footer} />} />
    </div>
  );
  return <div key={key} id={key} className='pages-base-root'>{Component}</div>;
};

export default PagesBase;
