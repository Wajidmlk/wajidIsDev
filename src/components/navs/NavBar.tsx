import React, { useState } from 'react';
import { tpCompId } from '../../common/commonTypes';
import { tpNavState } from '../../common/componentTypes';
import BlueNav from './blueNav/BlueNav';
import DefaultNav from './defaultNav/DefaultNav';

const NavBar = ({id}: tpCompId): JSX.Element => {
  const [state, setState] = useState<tpNavState>({
    items: [
      {id: "home", paceHolder: "home", parentId: ""},
      {id: "page1Info", paceHolder: "page 1", parentId: ""},
      {id: "page2Info", paceHolder: "page 2", parentId: ""}, 
      {id: "page3Info", paceHolder: "page 3", parentId: ""}, 
    ],
  });


  let NavBar = <></>;
  switch(id) {
    case "nav-000":
      NavBar = <DefaultNav state={state}/>;
      break;
    case "nav-001":
      NavBar = <BlueNav state={state}/>;
      break;
    default:
      NavBar = <DefaultNav state={state}/>;
  }
  return NavBar;
};

export default NavBar;
