import { tpAppStructure, tpPageStructure, tpUserData } from "../commonTypes";
import HomePageZero from "../../components/homePages/homePageZero/HomePageZero";

export const GetAppStructure = (): tpAppStructure => {
  return ({
    multipage: true,
    pages: [
      {
      id: "page000",
      sequence: -1,
      style: {
        backgroundImage: `url(https://images.unsplash.com/photo-1514790193030-c89d266d5a9d)`
      }
      },
      
    ],
    nav: {
      id: "nav-000",
      type: "line",
      location: "up",
      toogle: false,
    },
    footer: {
      id: "footer-000",
      toogle: false,
    },
    components: {
      button: "button0",
    },
    userData: {
      userId: "000",
      fullName: "Malik",
      dp: {
        height: 500,
        width: 400,
        url: "url(https://upload.wikimedia.org/wikipedia/commons/7/7f/Dani_Daniels_AEE_2013.jpg)",
      },
    },
  });
}

export const GetPageById = ({page, userData}: {page: tpPageStructure, userData: tpUserData}) => {
  let pageById: JSX.Element = <></>;
  switch(page.id) {
    case "page000" :
      pageById = <HomePageZero page={page} userData={userData}/>
      break;
    default :
    break;
  
  }
  return pageById;
}