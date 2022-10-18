import { tpCompProps } from "../../common/commonTypes";
import {Button0, Button1, Button2, Button3} from "./button0/Buttons";

export const Button = (props: tpCompProps) => {
  let button: JSX.Element = <></>;
  switch(props.compId) {
    case "button0" :
      button = <Button0 {...props} />
      break;
      case "button1" :
        button = <Button1 {...props} />
        break;
      case "button2" :
        button = <Button2 {...props} />
        break;
      case "button3" :
        button = <Button3 {...props} />
        break;
    default :
      button = <Button0 {...props} />
    break;
  
  }
  return <span className="buttons-root">{button}</span>;
}