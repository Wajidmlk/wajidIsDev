import { Dispatch, SetStateAction } from 'react';
import { tpPageStructure } from '../../common/commonTypes';
import { tpNavState } from '../../common/componentTypes';

export const fetchNavbarState = async(
  setState: Dispatch<SetStateAction<tpNavState>>, pages: Partial<tpPageStructure[]>,
  isMobileMode: boolean, isUser: boolean,
  ) => {
    const items: Partial<tpPageStructure[]> = [];
    pages.forEach(page => {
      if(
        (!page?.visibility || page.visibility !== 'hidden') && 
        (!page?.private || (page?.private && isUser))
      ) items.push(page);
    })
  setState({items, isMobileMode})
}

export const temp = '';