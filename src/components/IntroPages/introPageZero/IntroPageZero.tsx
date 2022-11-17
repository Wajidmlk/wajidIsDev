import React from 'react';
import { tpPageStructure } from '../../../common/commonTypes';
import TalentBox from './talentBox/TalentBox';

const IntroPageZero = ({page}: {page: tpPageStructure}) => {
  const { style, id } = page;
  return (
    <div id={id} className='introPage-000'>
      HERER
      <div className="flex row label-wrap">
        <TalentBox />
      </div>
    </div>
  );
};

export default IntroPageZero;
