import React from 'react';
import { useState } from 'react';
import { tpPageStructure } from '../../common/commonTypes';
import { tpProductsState } from '../../common/componentTypes';
import ShowcasePageZero from './showcasePageZero/ShowcasePageZero';
import { eminentImages, consolImages } from './tempData';

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
        data: eminentImages(10),
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
          icon: "BurstMode",
        },
        {
          show: false,
          check: false,
          id: "ChildTwo",
          name: "Description",
        },
      ],
      description: `Eminent Studio is a platform where buyers, product owners and clients meet with group of skilled people specially works together to meet specific product needs.`,
    },
    {
      id: "",
      name: "",
      show: true,
      toggleSize: false,
      toggleView: false,
      className: "",
      slides: {
        data: consolImages(6),
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
        },
      ],
      description: "It a portfolio website, build to introduce the assists of construction company 'Consol'.",
    }]
  });
  let pageById: JSX.Element = <></>;
  switch(page.pageId){
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
