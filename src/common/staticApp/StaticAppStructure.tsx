import { tpAppStructure, tpPageStructure } from '../commonTypes';
import HomePage from '../../components/homePages/HomePage';
import IntroPage from '../../components/IntroPages/IntroPage';

export const GetAppStructure = (): tpAppStructure => {
  return ({
    multiPage: false,
    pages: [
      {
        id: '630d36aa-2aa4-11ed-a261-0242ac121000',
        categoryId :'630d36aa-2aa4-11ed-a261-0242ac120000',
        sequence: -1,
        style: {
          backgroundImage: `url(https://images.unsplash.com/photo-1514790193030-c89d266d5a9d)`
        }
      },
      {
        id: '630d36aa-2aa4-11ed-a261-0242ac121001',
        categoryId :'630d36aa-2aa4-11ed-a261-0242ac120001',
        sequence: 0,
        style: {
          backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuP4A26vUkEZwYJL4zGV8KRxUbBmcX11Mdw&usqp=CAU)`
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
        url: 'url(https://upload.wikimedia.org/wikipedia/commons/7/7f/Dani_Daniels_AEE_2013.jpg)',
      },
    },
  });
}

export const GetPageById = ({page}: {page: tpPageStructure}) => {
  let pageById: JSX.Element = <></>;
  switch(page.categoryId) {
    case '630d36aa-2aa4-11ed-a261-0242ac120000' :
      pageById = <HomePage page={page} />
      break;
    case '630d36aa-2aa4-11ed-a261-0242ac120001' :
      pageById = <IntroPage page={page} />
      break;
    default :
      pageById = <HomePage page={page} />
    break;
  
  }
  return pageById;
}