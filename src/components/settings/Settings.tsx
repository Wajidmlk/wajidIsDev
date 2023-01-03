import React from 'react';
import { useState, useEffect } from 'react';
import { ToastWIP } from '../../baseComponents/reactToast/ReactToast';
import { tpCompId } from '../../common/commonTypes';
import { fetchSettingsState } from './settingsServices';
import DropDownMenu from '../dropDownMenu/DropDownMenu';

const Settings = (props: tpCompId/*&tpSettings*/): JSX.Element => {

  const [state, setState] = useState<{
    open: boolean,
  }>({open: false});

  useEffect(() => {
    fetchSettingsState();
  }, []);

  let selectedMenu = <></>;
  switch(props.id) {
    case 'settings000':
      break;
    case 'settings001':
      break;
    default:
  }
  return <div className='setting-menu'>
    <DropDownMenu
       closeMenuOnClick
       openButtonProps={{
         id: "settings",
         toolTip: "settings",
         icon: "SettingsSuggest",
       }}
       menuItems={[
         {
           toolTip: "burst mode",
           icon: "BurstMode",
           value: "copy",
           onClick: () => {
            ToastWIP();
           },
         },
       ]}
    />
  </div>;
};

export default Settings;
