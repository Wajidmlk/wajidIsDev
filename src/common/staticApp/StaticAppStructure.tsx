import { tpAppStructure } from "../commonTypes";
import HomePageZero from "../../components/homePages/homePageZero/HomePageZero";

export const GetAppStructure = (): tpAppStructure => {
  return ({
    multipage: false,
    pages: [
      {
      id: "page000",
      sequence: -1,
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
    }
  });
}

export const GetPageById = ({pageId}: {pageId: string}) => {
  let pageById: JSX.Element = <></>;
  switch(pageId) {
    case "page000" :
      pageById = <HomePageZero />
      break;
    default :
    break;
  
  }
  return pageById;
}