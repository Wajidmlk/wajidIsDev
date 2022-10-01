export type tpAppStructure = {
  multipage: boolean,
  pages: {
    id: string,
    sequence: number,
  }[],
  nav: {
    type: "line" | "round",
    location: "up" | "down" | "left" | "right" | "drag",
    toogle: boolean,
  },
  footer: {
    toogle: boolean,
  },
};
