export type tpPageStructure = {
  id: string,
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
  multipage: boolean,
  pages: tpPageStructure[],
  nav: {
    id: string,
    type?: "line" | "round",
    location?: "up" | "down" | "left" | "right" | "drag",
    toogle?: boolean,
    fixed?: boolean,
  },
  footer: {
    id: string,
    toogle?: boolean,
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