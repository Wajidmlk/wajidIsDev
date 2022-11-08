import React from 'react';
import { tpFooterState } from '../../../common/componentTypes';

const FooterZero = ({state}:{state: tpFooterState}): JSX.Element => {

  return (
    <div className='footer-000'>
      <ul>
        <li><a href='https://twitter.com/julesforrest'>Twitter</a></li>
        <li><a href='https://codepen.io/julesforrest'>Codepen</a></li>
        <li><a href='mailto:julesforrest@gmail.com'>Email</a></li>
        <li><a href='https://dribbble.com/julesforrest'>Dribbble</a></li>
        <li><a href='https://github.com/julesforrest'>Github</a></li>
      </ul>
    </div>    
  );
};

export default FooterZero;
