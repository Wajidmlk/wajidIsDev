import React from 'react';
import { tpNavState } from '../../../common/componentTypes';

type tpProps =  {state: tpNavState};

const DefaultNav = ({state}: tpProps): JSX.Element => {

  return (
    <ul className='nav-000'>
      {state.items.map(item => (<li>{item.paceHolder}</li>))}
    </ul>
  );
};

export default DefaultNav;
