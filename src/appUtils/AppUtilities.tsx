import React from 'react';
import {cloneElement} from 'react';
import { tpStyleProps } from '../common/commonTypes';

import DeleteIcon from '@mui/icons-material/Delete';
import GitHubIcon from '@mui/icons-material/GitHub';
import AirplayIcon from '@mui/icons-material/Airplay';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';




const icons = {
  Delete: <DeleteIcon />,
  GitHub: <GitHubIcon />,
  Airplay: <AirplayIcon/>,
  LinkedIn: <LinkedInIcon />,
  WhatsApp: <WhatsAppIcon />,
  MoreVert: <MoreVertIcon />,
  BurstMode: <BurstModeIcon />,
  OpenInFull: <OpenInFullIcon />,
  LocalPrintshop: <LocalPrintshopIcon />,
  CloseFullscreen: <CloseFullscreenIcon />,
  LocalPostOffice: <LocalPostOfficeIcon />,
};

export type tpIconCODE = keyof typeof icons;

type tpProps = {
  CODE: tpIconCODE | undefined, titleAccess?: string,
  className?: string, style?: tpStyleProps, onClick?: () => void,
};

export const MUI_ICON = ({CODE, style, titleAccess, onClick, className}: tpProps) => {

  if(!CODE) return "";
  const styling = style ? style : {};

  return cloneElement(icons[CODE], {style, titleAccess, className, onClick});;
}