import React from 'react';
import { useState, useEffect } from 'react';
import { tpCompId } from '../../common/commonTypes';
import { fetchSettingsState } from './settingsServices';
import DropDownMenu from '../dropDownMenu/DropDownMenu';
import { useAppStateContext } from '../../appUtils/AppState';
import { serviceLoggedIn } from '../../appUtils/AppUtilities';
import DraggableDialog from '../../baseComponents/dialogBox/draggableDialog/DraggableDialog';
import ConfirmationDialog from '../../baseComponents/dialogBox/confirmationDialog/ConfirmationDialog';

const Settings = (props: tpCompId/*&tpSettings*/): JSX.Element => {
  const [state, setState] = useState<{
    open: boolean,
    inTransit: boolean,
  }>({open: false, inTransit: true});

  const [confirmAction, setConfirmAction] = useState<boolean>(false);

  const serviceCloseDialog = () => {
    setState(prevState => ({...prevState, open: false}));
  }

  useEffect(() => {
    fetchSettingsState();
  }, []);

  const { user } = useAppStateContext();
  if(!serviceLoggedIn(user)) return <></>;

  let selectedMenu = <></>;
  switch(props.id) {
    case 'settings000':
      break;
    case 'settings001':
      break;
    default:
  }
  return <>
    <div className='setting-menu'>
      <DropDownMenu
        closeMenuOnClick
        openButtonProps={{
          id: "options",
          toolTip: "Options",
          icon: "SettingsSuggest",
        }}
        menuItems={[
          {
            toolTip: "settings",
            icon: "DisplaySettings",
            value: "Settings",
            onClick: () => {
              setState(prevState => ({...prevState, open: true}));
            },
          },
        ]}
      />
    </div>
    <DraggableDialog
      isReSizeable
      isDraggable
      defaultHeight={480}
      defaultWidth={900}
      onBackdropClick={() => {
        if(state.inTransit) setConfirmAction(true);
        else serviceCloseDialog();
      }}
      open={state.open}
      title='Settings'
      onClose={() => {
        if(state.inTransit) setConfirmAction(true);
        else serviceCloseDialog();
      }}
    >
      <>TESTING</>
    </DraggableDialog>
    <ConfirmationDialog
      title="Action Confirmation"
      message='Settings are in-transit, do you want to quit?'
      open={confirmAction && state.inTransit}
      onClose={() => setConfirmAction(false)}
      onCancel={() => {
        setConfirmAction(false);
        serviceCloseDialog();
      }}
      onConfirm={() => {
        setConfirmAction(false);
        serviceCloseDialog();
      }}
      children={<></>}
    />
  </>;
};

export default Settings;
