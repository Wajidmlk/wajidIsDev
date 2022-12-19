import React from 'react';
import { tpCompId } from '../../../common/commonTypes';
import { tpExperienceState } from '../../../common/componentTypes';

const serviceGetLinks = (data: string) => {
  const MATCH_START = "<LINK-";
  const MATCH_END = "-LINK>";
  if(!data.includes(MATCH_START)) return data;
  const startIndexOfLink = data.indexOf(MATCH_START) + MATCH_START.length;
  const endIndexOfLink = data.indexOf(MATCH_END) - 1;
  
  const link = data.substring(startIndexOfLink, endIndexOfLink);
  const finalData = <>{
      data.substring(0, startIndexOfLink - MATCH_START.length)
    }
    <a href={link}>{link}</a>
    {
      data.substring(endIndexOfLink + MATCH_END.length)
    }</>
  return finalData;
}

const ExperienceBox = ({id, heading, data}: tpExperienceState&tpCompId) => {
  return (
    <div id={id} className='experience-box'>
      <div className='heading'>{heading}</div>
      {
        data.map((dt, i) => {
          const {title, list, details, duration, organization, description} = dt;
          return <div key={`${title}-${i}`} className='row' style={{
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
