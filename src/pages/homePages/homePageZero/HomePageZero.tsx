import React from 'react';
import Typewriter from 'typewriter-effect';
import { DEFAULT_IMAGE_URL, userIntroData } from './../../../common/staticApp/AppStaticData';
import { tpPageStructure } from '../../../common/commonTypes';
import { useAppStateContext } from '../../../appUtils/AppState';
import { Button } from '../../../components/buttons/Button';
import { Toast } from '../../../baseComponents/reactToast/ReactToast';

const HomePageZero = ({page}: {page: tpPageStructure}) => {
  const { style, pageId } = page;
  const { userData, multiPage } = useAppStateContext();
  const { fullName, dp } = userData;
  return (
    <div id={pageId} className='homePage-000'>
      
      <div className={
        `intro_section ${style.backgroundImage ? 'page-backgroundImage' : ''}`} style={style}>
        <div className='pageBody'>
          <div className='grid'>
            <div className='box user-info'>
                <h3 className=''>{userIntroData.title}</h3>
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
                <div className=''>
                  <Button className='home0buttons' compId='button1' onClick={() => {
                     window.location.href =  `/wajidIsDev/${
                      multiPage ? '/' : '#'
                    }530d36aa-2aa4-11ed-a261-0242ac121000`;
                  }}
                  label='My Portfolio'/>
                  <Button className='home0buttons' compId='button1' onClick={() => {
                    Toast("Under Progress", "info");
                  }} label='Contact Me'/>
                </div>
            </div>
            <img
              src={dp?.url || DEFAULT_IMAGE_URL}
              className={`box user-dp`}
             />
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default HomePageZero;
