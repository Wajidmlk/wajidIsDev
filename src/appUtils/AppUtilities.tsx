import React, {cloneElement} from 'react';
import { tpStyleProps } from '../common/commonTypes';

import DeleteIcon from '@mui/icons-material/Delete';
import GitHubIcon from '@mui/icons-material/GitHub';
import PaletteIcon from '@mui/icons-material/Palette';
import AirplayIcon from '@mui/icons-material/Airplay';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';




const icons = {
  Delete: <DeleteIcon />,
  GitHub: <GitHubIcon />,
  Airplay: <AirplayIcon/>,
  Palette: <PaletteIcon />,
  LinkedIn: <LinkedInIcon />,
  WhatsApp: <WhatsAppIcon />,
  MoreVert: <MoreVertIcon />,
  BurstMode: <BurstModeIcon />,
  QueryStats: <QueryStatsIcon />,
  OpenInFull: <OpenInFullIcon />,
  LocalPrintshop: <LocalPrintshopIcon />,
  CloseFullscreen: <CloseFullscreenIcon />,
  LocalPostOffice: <LocalPostOfficeIcon />,
  AppRegistration: <AppRegistrationIcon />,
  SettingsSuggest: <SettingsSuggestIcon />,
};

export type tpIconCODE = keyof typeof icons;

type tpProps = {
  CODE: tpIconCODE | undefined, titleAccess?: string,
  className?: string, style?: tpStyleProps, onClick?: () => void,
};

export const getIcon = ({CODE, style, titleAccess, onClick, className}: tpProps) => {

  if(!CODE) return "";
  const styling = style ? style : {};

  return cloneElement(icons[CODE], {style, titleAccess, className, onClick});;
}