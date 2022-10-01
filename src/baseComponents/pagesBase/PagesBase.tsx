import * as React from 'react';
import HeaderContainer from '../headerContainer/HeaderContainer';
import FooterContainer from '../footerContainer/FooterContainer';
import './pagesBase.scss';
type tpProps = {
  Component: JSX.Element[],
  multipage?: boolean,
}

const PagesBase = ({Component, multipage}: tpProps): JSX.Element => {
  if(multipage) return (
    <>
      <HeaderContainer children={<>header </>}/>
      <div className='pages-base-root'>{Component}</div>
      <FooterContainer children={<>footer  </>}/>
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
