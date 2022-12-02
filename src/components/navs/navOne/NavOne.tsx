import React from 'react';
import { useAppStateContext } from '../../../appUtils/AppState';
import { tpNavState } from '../../../common/componentTypes';

type tpProps =  {state: tpNavState};

const BlueOne = ({state}: tpProps): JSX.Element => {
  const {multiPage} = useAppStateContext();
  return (
    <div className='nav-001'>
      <div id='navigation-bar'>
        <nav>
          <ul>
          {state.items.map(item => (
            <a 
              href={`${multiPage ? '/' : '#'}${item?.pageId}`}
            >
              <li key={item?.pageId}>{item?.pageName}</li>
            </a>))
          }
          </ul>
        </nav>
      </div>
    </div>    
  );
};

export default BlueOne;
