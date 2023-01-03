import React from 'react';
import { useEffect, useState } from 'react';
import { tpNavState } from '../../common/componentTypes';
import NavOne from './navOne/NavOne';
import NavZero from './navZero/NavZero';
import NavTwo from './navTwo/NavTwo';
import { fetchNavbarState } from './navServices';
import { useAppStateContext } from '../../appUtils/AppState';
import { serviceLoggedIn } from '../../appUtils/AppUtilities';

const NavBar = (): JSX.Element => {
  const { nav, pages, isMobileMode, user } = useAppStateContext();

  const [state, setState] = useState<tpNavState>({items: [], isMobileMode});
  const {id, visibility} = nav;

  useEffect(() => {
    fetchNavbarState(setState, pages, isMobileMode, serviceLoggedIn(user));
  }, [pages, user, isMobileMode]);

  if(visibility === "hidden") return <></>;

  let NavBar = <></>;
  switch(id) {
    case 'nav-000':
      NavBar = <NavZero state={state}/>;
      break;
    case 'nav-001':
      NavBar = <NavOne state={state}/>;
      break;
    case 'nav-002':
      NavBar = <NavTwo state={state}/>;
      break;
    default:
      NavBar = <NavZero state={state}/>;
  }
  return <div className={`navs ${isMobileMode && 'nav-mobile-mode'}`}>{NavBar}</div>;
};

export default NavBar;
