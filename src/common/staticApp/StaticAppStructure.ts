import { tpAppStructure } from "../commonTypes";

export const GetAppStructure = (): tpAppStructure => {
  return ({
    multipage: true,
    pages: [
      {
      id: "home",
      sequence: -1,
      },
      {
        id: "page1Info",
        sequence: 0,
      },
      {
      id: "page2Info",
      sequence: 1,
      },
      {
      id: "page3Info",
      sequence: 2,
      },
    ],
    nav: {
      id: "nav-001",
      type: "line",
      location: "up",
      toogle: false,
    },
    footer: {
      toogle: false,
    }
  });
}
