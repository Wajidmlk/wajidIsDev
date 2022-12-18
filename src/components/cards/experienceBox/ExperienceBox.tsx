import React from 'react';
import { tpCompId } from '../../../common/commonTypes';
import { tpExperienceState } from '../../../common/componentTypes';

const ExperienceBox = ({id, heading, data}: tpExperienceState&tpCompId) => {
  return (
    <div id={id} className='experience-box'>
      <div className='heading'>{heading}</div>
      {
        data.map((dt, i) => {
          const {title, list, details, duration, description} = dt;
          return <div key={`${title}-${i}`} className='row' style={{
            paddingBottom: (data.length > 1 && i !== data.length -1) ? "50px" : "0px",
          }}>
            <div className='round-cap'></div>
            <div className='title'>{title}</div>
            {duration && <div className='duration'>{duration}</div>}
            {details && <div className='additional-details'><i>{details}</i></div>}
            {description && <div className='description'>{description}</div>}
            {(list && list.length > 0) && <ul className='list'>{list.map(point => <li>{point}</li>)}</ul>}
          </div>;
        })
      }
    </div>
  );
};

export default ExperienceBox;
