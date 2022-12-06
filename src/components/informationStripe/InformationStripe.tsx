import React, { Dispatch, SetStateAction, useState } from 'react';
import { MUI_ICON } from '../../appUtils/AppUtliities';
import { tpFooterData, tpStyleProps } from '../../common/commonTypes';
import { tpProgressBarProps } from '../../common/componentTypes';

type tpProps = {
  shape?: "round" | "box" | "none",
  direction?: "vertical" | "horizontal",
  size?: 10 | 15 | 20 | 25 | 30 | 40 | 50 | 60 | 80,
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
    ...props, direction: "vertical", size: 80, shape: "round",
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
        const {value, icon, style, detailed} = box;
        
        const IconJSX = MUI_ICON({CODE: icon, titleAccess: icon}) || value;
        
        return <div className='stripe-box' style={{
          ...style,
          ...boxesShape, 
        }}
        onMouseEnter={() => {
          onHoverBox(i, true, "detailed", state, setState); 
        }}
        onMouseLeave={() => {
          onHoverBox(i, false, "detailed", state, setState); 
        }}
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