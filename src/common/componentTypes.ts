export type tpNavState = {
  items: {
    id: string,
    placeholder: string,
    parentId: string,
  }[],
};

export type tpSkillsState = {
  items: {
    id: string,
    placeholder: string,
    value: number,
  }[],
};

export type tpFooterState = {
  items: {
    id: string,
    placeholder: string,
    parentId: string,
  }[],
};

export type tpProgressBarProps =  {
  value: number,
  max?: number,
  min?: number,
  label?: string,
};
