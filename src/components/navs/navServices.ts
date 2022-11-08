import { Dispatch, SetStateAction } from 'react';
import { tpNavState } from '../../common/componentTypes';

export const fetchNavbarState = async(setState: Dispatch<SetStateAction<tpNavState>>) => {
  setState({items: [
    {id: '630d36aa-2aa4-11ed-a261-0242ac120000', placeholder: 'home', parentId: ''},
    {id: '630d36aa-2aa4-11ed-a261-0242ac120001', placeholder: 'page 1', parentId: ''},
  ]})
}

export const temp = '';