import React, { useState } from 'react';
import DraggableDialog from '../../../baseComponents/dialogBox/draggableDialog/DraggableDialog';
import { tpFooterData } from '../../../common/commonTypes';

const openDataDefaultState = {link: "", option: ""};

const FooterZero = ({state}:{state: tpFooterData[]}): JSX.Element => {
  const [openData, setOpenData] = useState<{
    link: string, option: string, order?: 0,
  }>(openDataDefaultState);

  return (
    <div className='footer-000'>
      <ul>
        {state.map(({mod, link, value}) => (
          <li key={link}><div onClick={() => {
            switch(mod) {
              case "goto":
                if(window) window.open(link);
                break;
              case "open":
                setOpenData({link, option: mod});
                break;
            }
            
          }}>{value}</div></li>
        ))}
      </ul>
      <DraggableDialog
        title={state[openData?.order || 0].value}
        open={openData.option === "open"}
        children={<iframe src={openData.link} />}
        onClose={() => setOpenData(openDataDefaultState)}
      />
    </div>    
  );
};

export default FooterZero;
