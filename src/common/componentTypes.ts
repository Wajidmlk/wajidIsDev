import { tpIconCODE } from "../appUtils/AppUtilities";
import { tpPageStructure, tpStyleProps } from "./commonTypes";

export type tpNavState = {
  items: Partial<tpPageStructure[]>,
  isMobileMode: boolean,
};

export type tpGallery = {
  items: {
    id: string,
    src: string,
    value: string,
  }[],
  noOfRows: number,
  className?: string,
};

export type tpSkillsState = {
  items: {
    id: string,
    placeholder: string,
    value: number,
  }[],
};

export type tpExperienceState = {
  heading: string,
  key?: string,
  data: {
    title: string,
    organization?: string,
    duration?: string,
    details?: string,
    description?: string,
    list?: string[],
  }[],
}

export type tpFooterState = {
  items: {
    id: string,
    placeholder: string,
    parentId: string,
  }[],
};

export type tpProgressBarProps =  {
  value: number,
  key?: string,
  max?: number,
  min?: number,
  label?: string,
};

export type tpSliderParams = {
  type: "images" | "text" | "custom",
  data: any[],
  slideShow?: boolean,
  hideArrows?: boolean,
};

export type tpProduct = {
  id: string,
  name: string,
  show: boolean,
  toggleSize: boolean,
  toggleView: boolean,
  className: string,
  description: string,
  slides?: tpSliderParams,
  sideBanner?: {
    value: string,
    style?: tpStyleProps,
    onClick?: () => void,
  },
  badges: {
    id: string,
    name: string,
    icon?: tpIconCODE,
    check: boolean,
    show: boolean,
  }[],
};

export type tpProductsState = {
  data: tpProduct[],
};
