import React from 'react';
import { tpNavState } from '../../../common/componentTypes';

type tpProps =  {state: tpNavState};

const BlueOne = ({state}: tpProps): JSX.Element => {

  return (
    <div className="nav-001">
      <div id="navigation-bar">
        <nav>
          <ul>
            <li><a href="#" id="logo">LOGO</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <a href="#" id="menu-icon"></a>
          </ul>
        </nav>
      </div>
      {/*state.items.map(item => (<li>{item.paceHolder}</li>))*/}
    </div>    
  );
};

export default BlueOne;
