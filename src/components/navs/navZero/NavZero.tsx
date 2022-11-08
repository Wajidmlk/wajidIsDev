import React from 'react';
import { useAppStateContext } from '../../../appUtils/AppState';
import { tpNavState } from '../../../common/componentTypes';

type tpProps =  {state: tpNavState};

const NavZero = ({state}: tpProps): JSX.Element => {
  const {multipage} = useAppStateContext();
  return (
    <ul className='nav-000'>
      {state.items.map(item => (
        <a 
          href={`${multipage ? '/' : '#'}${item.id}`}
        >
          <li key={item.id}>{item.placeholder}</li>
        </a>))}
    </ul>
  );
};

export default NavZero;
