import React from 'react';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

type tpButtonProps = {id?: string, toolTip?: string, icon?: JSX.Element, value?: string};
type tpProps = {
  open?: boolean,
  className?: string,
  closeMenuOnClick?: boolean,
  openButtonProps: tpButtonProps,
  menuItems: Array<tpButtonProps&{onClick: () => void}>,
};

const DropDownMenu = ({
  open = true, menuItems, className, openButtonProps, closeMenuOnClick,
}: tpProps): JSX.Element => (
  <>
    {open && (
    <div className={`dailog-custom-actions ${className}`}>
      <PopupState
        variant='popover'
        popupId={`${openButtonProps.id}-popup-menu`}
      >
        {(popupState) => (
          <>
            <Button
              disableRipple
              title={openButtonProps.toolTip}
              variant='contained'
              {...bindTrigger(popupState)}
              style={{ background: 'none', boxShadow: 'none', transition: 'none' }}
            >
              {openButtonProps.icon}
              {' '}
              {openButtonProps.value}
            </Button>
            <Menu {...bindMenu(popupState)}>
              {
                menuItems.length > 0 ? menuItems.map(({
                  id, icon, value, onClick, toolTip,
                }) => (
                  <MenuItem
                    id={id}
                    title={toolTip}
                    onClick={() => {
                      onClick();
                      if (closeMenuOnClick) popupState.close();
                    }}
                  >
                    {icon}
                    {' '}
                    {value}
                  </MenuItem>
                )) : <></>
              }
            </Menu>
          </>
        )}
      </PopupState>
    </div>
    )}
  </>
);

DropDownMenu.defaultProps = {
  className: '',
  open: true,
  closeMenuOnClick: false,
};

export default DropDownMenu;
