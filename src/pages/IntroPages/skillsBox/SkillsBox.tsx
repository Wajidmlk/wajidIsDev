import React, { useEffect, useState } from 'react';
import { tpSkillsState } from '../../../common/componentTypes';
import ProgressBar from '../../../components/progressBar/ProgressBar';
import { fetchSkillsState } from './skillsBoxServices';

const SkillsBox = () => {
  const [state, setState] = useState<tpSkillsState>({items: []});

  useEffect(() => {
    fetchSkillsState(setState);
  }, []);

  return (
    <div className='skills-box'>
      {
        state.items.map(({id, placeholder, value}) => (
          <ProgressBar key={id} id={id} value={value} label={placeholder} />
        ))
      }
    </div>
  );
};

export default SkillsBox;
