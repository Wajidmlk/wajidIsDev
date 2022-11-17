export type tpPageStructure = {
  id: string,
  categoryId: string,
  sequence: number,
  style: {
    backgroundImage?: string,
  }
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

export type tpAppStructure = {
  multiPage: boolean,
  pages: tpPageStructure[],
  nav: {
    id: string,
    type?: 'line' | 'round',
    location?: 'up' | 'down' | 'left' | 'right' | 'drag',
    toggle?: boolean,
    fixed?: boolean,
  },
  footer: {
    id: string,
    toggle?: boolean,
  },
  components : {
    button?: string,
  },
  userData: tpUserData,
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
