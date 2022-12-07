import React from 'react';
import { useAppStateContext } from '../../../appUtils/AppState';
import { tpNavState } from '../../../common/componentTypes';

type tpProps =  {state: tpNavState};

const NavZero = ({state}: tpProps): JSX.Element => {
  const {multiPage} = useAppStateContext();
  return (
    <ul className='nav-000'>
      {state.items.map(item => (
        <a key={item?.pageId} href={`${multiPage ? '/' : '#'}${item?.pageId}`}>
          <li key={item?.pageId}>{item?.pageName}</li>
        </a>))}
    </ul>
  );
};

export default NavZero;
