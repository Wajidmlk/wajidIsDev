import React from 'react';
type tpProps = {
  children: JSX.Element | JSX.Element[],
}

const HeaderContainer = ({children}: tpProps): JSX.Element => {
  // state, get/post
  return (
    <div className='navs'>{children}</div>
  );
};

export default HeaderContainer;
