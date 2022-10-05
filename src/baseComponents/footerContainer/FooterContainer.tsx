import React from 'react';
type tpProps = {
  children: JSX.Element | JSX.Element[],
}

const FeaderContainer = ({children}: tpProps): JSX.Element => {
  return (
    <div className='footers'>{children}</div>
  );
};

export default FeaderContainer;
