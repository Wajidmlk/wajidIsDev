import React from 'react';
import { tpCompId } from '../../../common/commonTypes';
import { tpExperienceState } from '../../../common/componentTypes';

const serviceGetLinks = (data: string) => {
  const START = "<";
  const END = ">";

  if(!data.includes(START)) return data;
  const startIndexOfLink = data.indexOf(START);
  const endIndexOfLink = data.indexOf(END);
  const link = data.substring(startIndexOfLink + 1, endIndexOfLink);
  
  const finalData = <>
    {data.substring(0, startIndexOfLink - 1)}
    <a href={link}>{link}</a>
    {data.substring(endIndexOfLink + 1)}</>
  return finalData;
}

const ExperienceBox = ({id, key, heading, data}: tpExperienceState&tpCompId) => {
  return (
    <div id={id} key={key} className='experience-box'>
      <div className='heading'>{heading}</div>
      {
        data.map((dt, i) => {
          const {title, list, details, duration, organization, description} = dt;
          return <div key={`${title}-${i}-${key}`} className='row' style={{
            paddingBottom: (data.length > 1 && i !== data.length -1) ? "50px" : "0px",
          }}>
            <div className='round-cap'></div>
            <div className='title'>{title}</div>
            {organization && <div className='org-name'>{organization}</div>}
            {duration && <div className='duration'>{duration}</div>}
            {details && <div className='additional-details'><i>{serviceGetLinks(details)}</i></div>}
            {description && <div className='description'>{serviceGetLinks(description)}</div>}
            {(list && list.length > 0) && <ul className='list'>{list.map(point => <li>{serviceGetLinks(point)}</li>)}</ul>}
          </div>;
        })
      }
    </div>
  );
};

export default ExperienceBox;
