import { tpIconCODE } from "../appUtils/AppUtilities";

export type tpStyleProps = {
  backgroundImage?: string,
  backgroundColor?: string,
  height?: string,
  width?: string,
  display?: string,
  padding?: string,
}

export type tpPageStructure = {
  pageId: string,
  pageName: string,
  parentId: string,
  pageCatId: string,
  visibility?: 'hidden'|'visible',
  sequence: number,
  style: tpStyleProps,
};

export type tpUserData = {
  userId: string,
  fullName: string,
  dp?: {
    height: number,
    width: number,
    url: string,
  }
};

export type tpFooterData = {
  value: string,
  link: string,
  icon?: tpIconCODE,
  mod: "goto" | "copy" | "open",
  detailed?: boolean,
  style?: tpStyleProps,
}
export type tpFooter = {
  id: string,
  toggle?: boolean,
  visibility?: 'hidden'|'visible',
  data: tpFooterData[],
};

export type tpAppStructure = {
  multiPage: boolean,
  pages: tpPageStructure[],
  nav: {
    id: string,
    visibility: 'hidden'|'visible',
    type?: 'line' | 'round',
    location?: 'up' | 'down' | 'left' | 'right' | 'drag',
    toggle?: boolean,
    fixed?: boolean,
  },
  footer: tpFooter,
  components : {
    button?: string,
  },
  userData: tpUserData,
  isMobileMode: boolean,
};

export type tpCompId = {
  id: string,
};

export type tpCompProps = {
  compId: string,
  onClick: () => void,
  className?: string,
  label?: string,
  id?: string,
}

export type TFile = {
  fPath: string,
  fName: string,
  fEntityId: string,
  fExtension: string,
  fType: string,
  fId?: string,
};
