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
      toggleSize: false,
      toggleView: false,
      className: "",
      slides: {
        data: [
          'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          ,
          'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
          ,
          'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
          ,
          'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
          ,
          'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
          ,
          ],
        type: "images",
      },
      sideBanner: {
        value: "Visit Now",
      },
      badges: [
        {
          show: true,
          check: false,
          id: "ChildOne",
          name: "Gallery",
          iconName: "BurstModeIcon",
        },
        {
          show: false,
          check: false,
          id: "ChildTwo",
          name: "Description",
          iconName: "",
        },
        {
          show: false,
          check: false,
          id: "ChildThree",
          name: "Support",
          iconName: "",
        },
      ],
    },
    {
      id: "",
      name: "",
      show: true,
      toggleSize: false,
      toggleView: false,
      className: "",

      slides: {
        data: [
          'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
          ,
          'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
          ,
          ],
        type: "images",
      },
      badges: [
        {
          show: true,
          check: false,
          id: "ChildOne",
          name: "Gallery",
        },
        {
          show: false,
          check: false,
          id: "ChildTwo",
          name: "Description",
          iconName: "",
        },
      ],
    }]
  });
  let pageById: JSX.Element = <></>;
  switch(page.pageId) {
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
