import { Dispatch, SetStateAction } from 'react';
import { tpPageStructure } from '../../common/commonTypes';
import { tpNavState } from '../../common/componentTypes';

export const fetchNavbarState = async(
  setState: Dispatch<SetStateAction<tpNavState>>, pages: Partial<tpPageStructure[]>,
  ) => {
    const items: Partial<tpPageStructure[]> = [];
    pages.forEach(page => {
      if(!page?.visibility || page?.visibility !== 'hidden') items.push(page);
    })
  setState({items})
}

export const temp = '';