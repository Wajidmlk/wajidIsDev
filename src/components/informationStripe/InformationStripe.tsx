import React, { Dispatch, SetStateAction, useState } from 'react';
import { getIcon } from '../../appUtils/AppUtilities';
import { tpFooterData } from '../../common/commonTypes';

type tpProps = {
  shape?: "round" | "box" | "none",
  direction?: "vertical" | "horizontal",
  size?: number,
  className?: string,
  data: tpFooterData[],
}
const onHoverBox = (
  seqNo: number, value: boolean, type: "detailed", state: tpProps,
  setState: Dispatch<SetStateAction<tpProps>>,
) => {
 const copyData = {...state};
 copyData.data[seqNo][type] = value;
 setState(copyData);
}

const InformationStripe = (props: tpProps): JSX.Element => {
  const [state, setState] = useState<tpProps>({
    direction: "vertical", size: 70, shape: "round", ...props,
  });

  const {direction, shape, size, className} = state;

  const boxesShape = {
    borderRadius: "0%", height: size || 20, width: size || 20,
  };
  switch(shape) {
    case "round":
    boxesShape.borderRadius = "50%";
    break;
  }

  return <div
    className={`information-stripe ${className}`}
    style={{
      display: "flex", flexDirection: direction === "vertical" ? "column" : "row",
    }}
  >
    {
      state.data.map((box, i) => {
        const {value, icon, style, detailed, mod, link} = box;
        const iconSize = {paddingLeft: "5px", height: "60%", width: "60%"};
        const IconJSX = getIcon({CODE: icon, titleAccess: icon, style: !detailed ? iconSize :{}}) || value;

        return <div key={`${value}-${i}`} className='stripe-box' style={{
            ...style,
            ...boxesShape, 
          }}
          onMouseEnter={() => {
            onHoverBox(i, true, "detailed", state, setState); 
          }}
          onMouseLeave={() => {
            onHoverBox(i, false, "detailed", state, setState); 
          }}
          onClick={() => (mod === "goto" && window) && window.open(link)}
        >
          {
            (!!detailed) ?
              <div>
                <div>
                  {IconJSX}
                </div>
                &nbsp;
                <textPath>{value}</textPath>
              </div> :
              <div>{IconJSX}</div>
          }
        </div>
      })
    }
  </div>;
}

export default InformationStripe;