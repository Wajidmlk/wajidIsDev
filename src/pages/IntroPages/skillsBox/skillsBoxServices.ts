import { Dispatch, SetStateAction } from 'react';
import { tpSkillsState } from '../../../common/componentTypes';
export const fetchSkillsState = async(setState: Dispatch<SetStateAction<tpSkillsState>>) => {
  setState({items: [
    {id: '630d36aa-2aa4-11ed-a261-0242ac121000', placeholder: 'React', value: 90},
    {id: '630d36aa-2aa4-11ed-a261-0242ac121000', placeholder: 'NodeJs', value: 85},
    {id: '630d36aa-2aa4-11ed-a261-0242ac121000', placeholder: 'Saas', value: 80},
    {id: '630d36aa-2aa4-11ed-a261-0242ac121000', placeholder: 'TypeScript', value: 90},
    {id: '630d36aa-2aa4-11ed-a261-0242ac121000', placeholder: 'JavaScript', value: 90},
    {id: '630d36aa-2aa4-11ed-a261-0242ac121000', placeholder: 'C Sharpe', value: 70},
    {id: '630d36aa-2aa4-11ed-a261-0242ac121000', placeholder: 'C ++', value: 70},
  ]})
}

export const temp = '';