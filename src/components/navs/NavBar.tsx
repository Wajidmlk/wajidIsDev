import React, { useEffect, useState } from 'react';
import { tpCompId } from '../../common/commonTypes';
import { tpNavState } from '../../common/componentTypes';
import NavOne from './navOne/NavOne';
import NavZero from './navZero/NavZero';
import NavTwo from './navTwo/NavTwo';
import { fetchNavbarState } from './navServices';

const NavBar = ({id}: tpCompId): JSX.Element => {
  const [state, setState] = useState<tpNavState>({items: []});

  useEffect(() => {
    fetchNavbarState(setState);
  }, []);

  let NavBar = <></>;
  switch(id) {
    case "nav-000":
      NavBar = <NavZero state={state}/>;
      break;
    case "nav-001":
      NavBar = <NavOne state={state}/>;
      break;
    case "nav-002":
      NavBar = <NavTwo state={state}/>;
      break;
    default:
      NavBar = <NavZero state={state}/>;
  }
  return NavBar;
};

export default NavBar;
