import React from 'react';
import { tpAppStructure, tpPageStructure } from '../commonTypes';
import HomePage from '../../pages/homePages/HomePage';
import IntroPage from '../../pages/IntroPages/IntroPage';
import ExperiencePage from '../../pages/experiencePages/ExperiencePage';
import ShowcasePage from '../../pages/showcasePages/ShowcasePage';

const IMG = require('./../images/dp1.jpg');

export const GetAppStructure = (): tpAppStructure => {
  return ({
    multiPage: false,
    pages: [
      {
        pageId: '630d36aa-2aa4-11ed-a261-0242ac121000',
        pageCatId :'630d36aa-2aa4-11ed-a261-0242ac120000',
        pageName: 'Home',
        parentId: '',
        sequence: -1,
        style: {
          backgroundImage: `url(https://images.unsplash.com/photo-1514790193030-c89d266d5a9d)`,
          padding: "10px",
        }
      },
      {
        pageId: '530d36aa-2aa4-11ed-a261-0242ac121000',
        pageCatId :'630d36aa-2aa4-11ed-a261-0242ac120001',
        pageName: 'About Me',
        parentId: '',
        sequence: 0,
        style: {
          backgroundImage: `url(https://img.freepik.com/free-vector/realistic-studio-lights-empty-background-design_1017-27233.jpg?w=2000)`,
          padding: "10px",
        },
      },
      {
        pageId: '430d36aa-2aa4-11ed-a261-0242ac121001',
        pageCatId :'630d36aa-2aa4-11ed-a261-0242ac120003',
        pageName: 'Showcase',
        parentId: '',
        sequence: 2,
        style: {
          padding: "50px",
        }
      },
      {
        pageId: '330d36aa-2aa4-11ed-a261-0242ac121001',
        pageCatId :'630d36aa-2aa4-11ed-a261-0242ac120002',
        pageName: 'Experience',
        parentId: '',
        sequence: 3,
        visibility: 'hidden',
        style: {
          height: "300px",
          width: "100%",
          padding: "10px",
        }
      },
    ],
    nav: {
      id: 'nav-000',
      type: 'line',
      location: 'up',
      toggle: false,
    },
    footer: {
      id: 'footer-000',
      data: [
        {
          value: "Github",
          link: "https://www.github.com/wajidmlk",
          mod: "goto",
        },
        {
          value: "linkedIn",
          link: "https://www.linkedin.com/in/wajidmlk123",
          mod: "goto",
        },
        {
          value: "Email",
          link: "mailto:wajidmlk123@gmail.com?subject=Query Form Web",
          mod: "goto",
        },
        {
          value: "WhatsApp",
          link: "whatsapp://send?phone=+923022244303",
          mod: "goto",
        },
      ],
      toggle: false,
    },
    components: {
      button: 'button0',
    },
    userData: {
      userId: '000',
      fullName: 'Malik',
      dp: {
        height: 500,
        width: 400,
        url: IMG,
      },
    },
  });
}

export const GetPageById = ({page}: {page: tpPageStructure}) => {
  if(page?.visibility === "hidden") return <></>
  let pageById: JSX.Element = <></>;
  switch(page.pageCatId) {
    case '630d36aa-2aa4-11ed-a261-0242ac120000' :
      pageById = <HomePage page={page} />
      break;
    case '630d36aa-2aa4-11ed-a261-0242ac120001' :
      pageById = <IntroPage page={page} />
      break;
    case '630d36aa-2aa4-11ed-a261-0242ac120002' :
      pageById = <ExperiencePage page={page} />
      break;
    case '630d36aa-2aa4-11ed-a261-0242ac120003' :
      pageById = <ShowcasePage page={page} />
      break;
    default :
      pageById = <HomePage page={page} />
    break;
  
  }
  return pageById;
}