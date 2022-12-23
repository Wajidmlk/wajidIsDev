import React from 'react';
import { tpAppStructure, tpPageStructure } from '../commonTypes';
import HomePage from '../../pages/homePages/HomePage';
import IntroPage from '../../pages/IntroPages/IntroPage';
import ExperiencePage from '../../pages/experiencePages/ExperiencePage';
import ShowcasePage from '../../pages/showcasePages/ShowcasePage';
import FooterPage from '../../pages/footerPages/FooterPage';
import Gallery from '../../components/galleries/Gallery';

const IMG = require('./../images/dp1.jpg');

const TESTING_PAGE = (data: tpPageStructure) =>
<div
  id={data.pageId}
  key={data.pageId}
  style={{...data.style, display: data.visibility === "hidden" ? "none" : "block"}}
>
  <Gallery id='gallery-000' items={[
      {id: "9", src: "https://source.unsplash.com/_cvwXhGqG-o/300x300", value: "test 1"},
      {id: "8", src: "https://source.unsplash.com/AHBvAIVqk64/300x500", value: "test 2"},
      {id: "7", src: "https://source.unsplash.com/VLPLo-GtrIE/300x300", value: "test 3"},
      {id: "6", src: "https://source.unsplash.com/AR7aumwKr2s/300x300", value: "test 4"},
      {id: "5", src: "https://source.unsplash.com/dnL6ZIpht2s/300x300", value: "test 5"},
      {id: "4", src: "https://source.unsplash.com/tV_1sC603zA/300x500", value: "test 6"},
      {id: "3", src: "https://source.unsplash.com/Xm9-vA_bhm0/300x500", value: "test 7"},
      {id: "2", src: "https://source.unsplash.com/NTjSR3zYpsY/300x300", value: "test 8"},
      {id: "1", src: "https://source.unsplash.com/2JH8d3ChNec/300x300", value: "test 9"},
    ]}
  />
</div>

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
          backgroundImage: `url(https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg?w=2000)`,
          padding: "35px",
        }
      },
      {
        pageId: '230d36aa-2aa4-11ed-a261-0242ac121001',
        pageCatId :'TEST',
        pageName: 'Gallery',
        parentId: '',
        sequence: 3,
        visibility: "hidden",
        style: {
          backgroundColor: "black",
          width: "100%",
        }
      },
      {
        pageId: '330d36aa-2aa4-11ed-a261-0242ac121001',
        pageCatId :'630d36aa-2aa4-11ed-a261-0242ac120002',
        pageName: 'Experience',
        parentId: '',
        sequence: 3,
        style: {
        }
      },
      {
        pageId: '621d36aa-2aa4-11ed-a261-0242ac121000',
        pageCatId :'630d36aa-2aa4-11ed-a261-0242ac120004',
        pageName: 'Navigation',
        parentId: '',
        sequence: 4,
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
      visibility: 'visible',
      location: 'up',
      toggle: false,
    },
    footer: {
      id: 'footer-001',
      visibility: 'hidden',
      data: [
        {
          value: "Github",
          link: "https://www.github.com/wajidmlk",
          mod: "goto",
          icon: "GitHub",
        },
        {
          value: "linkedIn",
          link: "https://www.linkedin.com/in/wajidmlk123",
          icon: "LinkedIn",
          mod: "goto",
        },
        {
          value: "Email",
          link: "mailto:wajidmlk123@gmail.com?subject=Query Form Web",
          icon: "LocalPostOffice",
          mod: "goto",
        },
        {
          value: "WhtsAp",
          link: "whatsapp://send?phone=+923022244303",
          icon: "WhatsApp",
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
      fullName: 'Malik Wajid',
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
    case '630d36aa-2aa4-11ed-a261-0242ac120004' :
      pageById = <FooterPage page={page} />
      break;
    case 'TEST' :
      pageById = <TESTING_PAGE {...page} />
      break;
    default :
      pageById = <>NO PAGE</>
    break;
  
  }
  return pageById;
}