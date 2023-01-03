import React from 'react';
import { useState } from 'react';
import { useAppStateContext } from '../../../appUtils/AppState';
import { getIcon } from '../../../appUtils/AppUtilities';
import { tpPageStructure } from '../../../common/commonTypes';
import { tpNavState } from '../../../common/componentTypes';
import Settings from '../../settings/Settings';

type tpProps =  {state: tpNavState};

const getNavLines = (rows: Array<tpPageStructure|undefined>, multiPage: boolean) => 
rows.map(item => (
  <a
    key={item?.pageId} 
    href={`${multiPage ? '/' : '#'}${item?.pageId}`}
  >
    <li key={item?.pageId}>{item?.pageName}</li>
  </a>
));

const NavZero = ({state: {isMobileMode, items}}: tpProps): JSX.Element => {
  const {multiPage} = useAppStateContext();
  const [toggle, setToggle] = useState<boolean>(false);
  if(!isMobileMode) return (
    <ul className='nav-000'>
      {getNavLines(items, multiPage)}
    </ul>
  )
  return (
    <ul className='nav-000'>
      {
        !toggle ? (
          <div className='button'>
            <div style={{display: "flex"}}>
            <li
              key='open-nav'
              onClick={() => setToggle(true)}
            >
              {getIcon({ CODE: "MenuOpen", titleAccess:`Open Nav` })}
            </li>
            <Settings id="settings000"/>
            </div>
          </div>
        ) : (
          <>
            <div className='button'>
              <li
                key='close-nav'
                onClick={() => setToggle(false)}
              >
                {getIcon({ CODE: "Close", titleAccess:`Close Nav` })}
              </li>
            </div>
            {getNavLines(items, multiPage)}
          </>
        )
             
      }
    </ul>
  );
};

export default NavZero;
