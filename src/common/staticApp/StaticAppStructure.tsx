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
          backgroundImage: `url(https://img.freepik.com/free-vector/realistic-studio-lights-empty-background-design_1017-27233.jpg?w=2000)`
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
        url: 'url(https://scontent.fskz1-1.fna.fbcdn.net/v/t39.30808-6/274988342_4423016951132943_6969899941379106606_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGV-2_LTewPU1LXu7B3vQx5cNDK03yHRclw0MrTfIdFyUF8JE7t7ImcDnSLOXrj0ZZzvBDp3xb1ZDWt1Q3kxRYS&_nc_ohc=4d7Q0izLj4EAX9_4nkE&_nc_ht=scontent.fskz1-1.fna&oh=00_AfCwJJxY4MnwMAQra3ULXKnA01rA29OFpOwRRrKc1vvHjQ&oe=63832F24)',
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