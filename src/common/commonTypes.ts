import { tpIconCODE } from "../appUtils/AppUtilities";

export type tpUser = {
  id: string,
  name: string,
  userId: string,
  isLogin: boolean,
}

export type tpStyleProps = {
  color?: string,
  width?: string,
  border?: string,
  height?: string,
  margin?: string,
  padding?: string,
  display?: string,
  backgroundColor?: string,
  backgroundImage?: string,
}

export type tpPageStructure = {
  pageId: string,
  private?: boolean,
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
  icon?: tpIconCODE,
  label?: string,
  height?: string,
  width?: string,
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
