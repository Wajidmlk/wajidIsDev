import { tpAppStructure } from "../commonTypes";

export const GetAppStructure = (): tpAppStructure => {
  return ({
    multipage: true,
    pages: [
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
      type: "line",
      location: "up",
      toogle: false,
    },
    footer: {
      toogle: false,
    }
  });
}
