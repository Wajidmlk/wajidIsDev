import React, { useEffect, useState } from 'react';
import ScrollAnimator from '../../../baseComponents/scrollAnimator/ScrollAnimator';
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
        state.items.map(({id, placeholder, value}, i) => (
          <ScrollAnimator
            animateIn='animate__slideInUp'
            delay={150 * i}
            animateOnce
          >
            <ProgressBar key={id} id={id} value={value} label={placeholder} />
          </ScrollAnimator>
        ))
      }
    </div>
  );
};

export default SkillsBox;
