import React from 'react';
import { cloneElement } from 'react';

type tpProps = {
  children?: JSX.Element,
  onClick?: () => void,
  bColor?: string,
  color?: string,
  bannerMessage: string,
  left?: boolean,
  raised?: boolean,
  zIndex?: boolean,
  hide?: boolean,
  width?: number,
}
const BannerStripe = ({
  children, hide, bColor, zIndex, color, left, raised, width, onClick, bannerMessage,
}: tpProps): JSX.Element => {
  
  if(!children) return <></>;
  
  const {style, className} = children.props;
  console.log(children)
  const styling = {
    ...style,
    color: color || "black",
    ["--c" as any]: bColor || "lightblue",
    ["--f" as any]: `${width || (10 + bannerMessage.length)}px`,
    ["--d" as any]: `${raised ? bannerMessage.length : "0"}px`,
  };
  return cloneElement(
    children, {
      ...children.props,
      style: styling, onClick,
      "data-ribbon": bannerMessage,
      className: `
      stripeContainer${left ? " left " : ""} 
      ${hide ? "hide" : ""} 
      ${zIndex ? "zIndex" : ""}
      ${className}`,
    },
  );
};

export default BannerStripe;