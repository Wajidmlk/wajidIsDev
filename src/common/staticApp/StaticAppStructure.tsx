import { tpAppStructure, tpPageStructure } from '../commonTypes';
import HomePage from '../../pages/homePages/HomePage';
import IntroPage from '../../pages/IntroPages/IntroPage';
import ExperiencePage from '../../pages/experiencePages/ExperiencePage';
import ShowcasePage from '../../pages/showcasePages/ShowcasePage';

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
        pageId: '630d36aa-2aa4-11ed-a261-0242ac121001',
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
        pageId: '630d36aa-2aa4-11ed-a261-0242ac121001',
        pageCatId :'630d36aa-2aa4-11ed-a261-0242ac120003',
        pageName: 'Showcase',
        parentId: '',
        visibility: 'hidden',
        sequence: 2,
        style: {
          padding: "50px",
        }
      },
      {
        pageId: '630d36aa-2aa4-11ed-a261-0242ac121001',
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
        url: 'url(https://scontent.fskz2-1.fna.fbcdn.net/v/t39.30808-6/274988342_4423016951132943_6969899941379106606_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGV-2_LTewPU1LXu7B3vQx5cNDK03yHRclw0MrTfIdFyUF8JE7t7ImcDnSLOXrj0ZZzvBDp3xb1ZDWt1Q3kxRYS&_nc_ohc=TK3aeTXc0LYAX-J_N3G&_nc_ht=scontent.fskz2-1.fna&oh=00_AfCIA6D8ZQNAJ0Dwb4Tmg_D14uhUpCD2DDuslF5Kb2b4Sg&oe=638B1824)',
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