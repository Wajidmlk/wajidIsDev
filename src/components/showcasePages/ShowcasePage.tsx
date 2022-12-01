import React, { useState } from 'react';
import { tpPageStructure } from '../../common/commonTypes';
import { tpProductsState } from '../../common/componentTypes';
import ShowcasePageZero from './showcasePageZero/ShowcasePageZero';

const ShowcasePage = ({page}: {page: tpPageStructure}) => {
  const [state, setState] = useState<tpProductsState>({
    data: [{
      id: "",
      name: "",
      show: true,
      sideBanner: {
        value: "Visit Now",
      },
      badges: [
        {
          show: false,
          check: false,
          id: "ChildOne",
          name: "One",
        },
        {
          show: false,
          check: false,
          id: "ChildTwo",
          name: "Two",
          iconName: "",
        },
        {
          show: false,
          check: false,
          id: "ChildThree",
          name: "Three",
          iconName: "",
        },
      ],
    },
    {
      id: "",
      name: "",
      show: true,
      badges: [
        {
          show: false,
          check: false,
          id: "ChildOne",
          name: "One",
        },
        {
          show: false,
          check: false,
          id: "ChildTwo",
          name: "Two",
          iconName: "",
        },
        {
          show: false,
          check: false,
          id: "ChildThree",
          name: "Three",
          iconName: "",
        },
      ],
    }]
  });
  let pageById: JSX.Element = <></>;
  switch(page.id) {
    case '630d36aa-2aa4-11ed-a261-0242ac121001' :
      pageById = <ShowcasePageZero page={page} state={state} setState={setState}/>
      break;
    default:
      pageById = <ShowcasePageZero page={page} state={state} setState={setState}/>
    break;
  
  }
  return pageById;
};

export default ShowcasePage;
