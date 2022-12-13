import React from 'react';
import { useState } from 'react';
import { useAppStateContext } from '../../../appUtils/AppState';
import { getIcon } from '../../../appUtils/AppUtilities';
import { tpPageStructure } from '../../../common/commonTypes';
import { tpNavState } from '../../../common/componentTypes';

type tpProps =  {state: tpNavState};

const getNavLines = (rows: Array<tpPageStructure|undefined>, multiPage: boolean) => rows.map(item => (
  <a 
    href={`${multiPage ? '/' : '#'}${item?.pageId}`}
  >
    <li key={item?.pageId}>{item?.pageName}</li>
  </a>
));

const NavZero = ({state: {isMobileMode, items}}: tpProps): JSX.Element => {
  const {multiPage} = useAppStateContext();
  console.log(isMobileMode)
  if(!isMobileMode) return (
    <ul className='nav-000'>
      {getNavLines(items, multiPage)}
    </ul>
  )
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <ul className='nav-000'>
      {
        !toggle ? (
          <a className='button'>
            <li
              key='open-nav'
              onClick={() => setToggle(true)}
            >
              {getIcon({ CODE: "MenuOpen", titleAccess:`Open Nav` })}
            </li>
          </a>
        ) : (
          <>
            <a className='button'>
              <li
                key='close-nav'
                onClick={() => setToggle(false)}
              >
                {getIcon({ CODE: "Close", titleAccess:`Close Nav` })}
              </li>
            </a>
            {getNavLines(items, multiPage)}
          </>
        )
             
      }
    </ul>
  );
};

export default NavZero;
