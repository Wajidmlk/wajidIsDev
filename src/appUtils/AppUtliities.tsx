import BurstModeIcon from '@mui/icons-material/BurstMode';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import AirplayIcon from '@mui/icons-material/Airplay';
import GitHubIcon from '@mui/icons-material/GitHub';
import { tpStyleProps } from '../common/commonTypes';

type tpProps = {
  CODE: string, titleAccess?: string,
  className?: string, style?: tpStyleProps, onClick?: () => void,
};

export const MUI_ICON = ({CODE, style, titleAccess, onClick, className}: tpProps) => {
  const styling = style ? style : {};
  const props = {style, titleAccess, className, onClick };
  const icons = {
    AirplayIcon: <AirplayIcon {...props}/>,
    MoreVertIcon: <MoreVertIcon {...props} />,
    BurstModeIcon: <BurstModeIcon {...props} />,
    OpenInFullIcon: <OpenInFullIcon {...props} />,
    LocalPrintshopIcon: <LocalPrintshopIcon {...props} />,
    CloseFullscreenIcon: <CloseFullscreenIcon {...props} />,
    GitHubIcon: <GitHubIcon {...props} />,
    
  };
  type Keys = keyof typeof icons;
  return icons[CODE as Keys];
}