import React from 'react';
import { useAppStateContext } from '../../../appUtils/AppState';
import { tpNavState } from '../../../common/componentTypes';

type tpProps =  {state: tpNavState};

const BlueOne = ({state}: tpProps): JSX.Element => {
  const {multipage} = useAppStateContext();
  return (
    <div className="nav-001">
      <div id="navigation-bar">
        <nav>
          <ul>
          {state.items.map(item => (
            <a 
              href={`${multipage ? "/" : "#"}${item.id}`}
            >
              <li key={item.id}>{item.placeholder}</li>
            </a>))
          }
          </ul>
        </nav>
      </div>
    </div>    
  );
};

export default BlueOne;
