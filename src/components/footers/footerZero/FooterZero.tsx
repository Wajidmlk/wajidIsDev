import React from 'react';
import { useState } from 'react';
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
          <li><div onClick={() => {
            switch(mod) {
              case "goto":
                setOpenData(openDataDefaultState);
                if(window) window.open(link, '_blank');
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
        children={<iframe title={openData.link} src={openData.link} />}
        onClose={() => setOpenData(openDataDefaultState)}
      />
    </div>    
  );
};

export default FooterZero;
