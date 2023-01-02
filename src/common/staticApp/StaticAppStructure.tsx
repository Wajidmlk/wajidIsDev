import { tpAppStructure, tpPageStructure, tpUser } from '../commonTypes';
import HomePage from '../../pages/homePages/HomePage';
import IntroPage from '../../pages/IntroPages/IntroPage';
import ExperiencePage from '../../pages/experiencePages/ExperiencePage';
import ShowcasePage from '../../pages/showcasePages/ShowcasePage';
import FooterPage from '../../pages/footerPages/FooterPage';
import ScrollAnimator from '../../baseComponents/scrollAnimator/ScrollAnimator';
import BannerStripe from '../../components/stripes/bannerStripe/BannerStripe';

const IMG = require('./../images/dp1.jpg');

const TESTING_PAGE = (data: tpPageStructure) =>
<div
  id={data.pageId}
  key={data.pageId}
  style={data.style}
>
  <>
    <BannerStripe
      bannerMessage='Message'
      raised
      color='black !important'
      left
    >
      <div style={{height: 300, width: 400, border: "2px black solid", color:"black"}}>
        dsfsdf
      </div>
    </BannerStripe>
  </>
</div>

export const GetAppStructure = (): tpAppStructure => {
  return ({
    multiPage: false,
    isMobileMode: false,
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
        pageId: '330d36aa-2aa4-11ed-a261-0242ac121001',
        pageCatId :'630d36aa-2aa4-11ed-a261-0242ac120002',
        pageName: 'Experience',
        private: true,
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
      {
        pageId: '230d36aa-2aa4-11ed-a261-0242ac121001',
        pageCatId :'TEST',
        pageName: 'Banner',
        parentId: '',
        sequence: 3,
        visibility: 'hidden',
        style: {
          padding: "30px",
          border: "black 15px solid",
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

export const GetPageById = ({page, user}: {page: tpPageStructure, user?: tpUser}) => {
  if(page?.visibility === "hidden" || (page?.private && (!user || !user?.isLogin))) return <></>;
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
  if(page.pageCatId !== "630d36aa-2aa4-11ed-a261-0242ac120004") {
    pageById = <ScrollAnimator
      animateIn="animate__fadeIn"
      delay={15}
      animateOnce
    >
      {pageById}
    </ScrollAnimator>;
  }
  return pageById;
}