import * as React from 'react';
type tpProps = {
  component: JSX.Element;
}

const CpPublicRoute = ({component: Component}: tpProps): JSX.Element => {
  return (
    <div className='App-base-root'>
      Header
      {Component}
      Footer
    </div>
  );
};

export default CpPublicRoute;
