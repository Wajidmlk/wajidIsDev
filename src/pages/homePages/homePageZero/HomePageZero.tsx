import React from 'react';
import Typewriter from 'typewriter-effect';
import { DEFAULT_IMAGE_URL, userIntroData } from './../../../common/staticApp/AppStaticData';
import { tpPageStructure } from '../../../common/commonTypes';
import { useAppStateContext } from '../../../appUtils/AppState';
import { Button } from '../../../components/buttons/Button';

const HomePageZero = ({page}: {page: tpPageStructure}) => {
  const { style, pageId } = page;
  const { userData } = useAppStateContext();
  const { fullName, dp } = userData;
  return (
    <div id={pageId} className='homePage-000'>
      
      <div className={
        `intro_section ${style.backgroundImage ? 'page-backgroundImage' : ''}`} style={style}>
        <div className='pageBody'>
          <div className='grid' style={{gridTemplateColumns: '55% 45%'}}>
            <div className='box user-into'>
                <h3 className=''>{fullName}</h3>
                <h2 className=''>
                  <Typewriter
                    options={{
                      strings: [
                        userIntroData.animated.first,
                        userIntroData.animated.second,
                        userIntroData.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h2>
                <p className=''>{userIntroData.description}</p>
                <div className=''>{}
                  <Button className='home0buttons' compId='button1' onClick={() => {
                    window.location.href = `/#630d36aa-2aa4-11ed-a261-0242ac121001`;
                  }}
                  label='My Portfolio'/>
                  <Button className='home0buttons' compId='button1' onClick={() => {}} label='Contact Me'/>
                </div>
            </div>
            <div
              className={`box user-into `}
              style={{
                height: dp?.height || 500,
                width: dp?.width || 400,
                backgroundImage: dp?.url || DEFAULT_IMAGE_URL,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
            ></div>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default HomePageZero;
