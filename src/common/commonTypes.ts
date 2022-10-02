export type tpAppStructure = {
  multipage: boolean,
  pages: {
    id: string,
    sequence: number,
  }[],
  nav: {
    id: string,
    type?: "line" | "round",
    location?: "up" | "down" | "left" | "right" | "drag",
    toogle?: boolean,
    fixed?: boolean,
  },
  footer: {
    toogle?: boolean,
  },
};

export type tpCompId = {
  id: string,
};
