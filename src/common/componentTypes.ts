import { tpPageStructure, tpStyleProps } from "./commonTypes";

export type tpNavState = {
  items: Partial<tpPageStructure[]>,
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

export type tpProduct = {
  id: string,
  name: string,
  show: boolean,
  toggleSize: boolean,
  toggleView: boolean,
  className: string,
  sideBanner?: {
    value: string,
    style?: tpStyleProps,
    onClick?: () => void,
  },
  badges: {
    id: string,
    name: string,
    iconName?: string,
    check: boolean,
    show: boolean,
  }[],
};

export type tpProductsState = {
  data: tpProduct[],
};
