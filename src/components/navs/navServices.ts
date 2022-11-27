import { Dispatch, SetStateAction } from 'react';
import { tpNavState } from '../../common/componentTypes';

export const fetchNavbarState = async(setState: Dispatch<SetStateAction<tpNavState>>) => {
  setState({items: [
    {id: '630d36aa-2aa4-11ed-a261-0242ac121000', placeholder: 'Home', parentId: ''},
    {id: '630d36aa-2aa4-11ed-a261-0242ac121001', placeholder: 'About Me', parentId: ''},
  ]})
}

export const temp = '';