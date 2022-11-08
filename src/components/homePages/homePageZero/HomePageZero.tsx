import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { DEFAULT_IMAGE_URL, userIntroData } from './../../../common/staticApp/AppStaticData';
import { TFile, tpPageStructure, tpUserData } from '../../../common/commonTypes';
import { Button } from '../../buttons/Button';
import DragDropFileUploader from '../../../baseComponents/dragDropFilesUploader/DragDropFilesUploader';

const HomePageZero = ({page, userData}: {page: tpPageStructure, userData: tpUserData}) => {
  const { style, id } = page;
  const { fullName, userId, dp } = userData;
  const [uploadedFiles, setUploadedFiles] = useState<TFile[]>([]);
  return (
    <div id={id} className='homePage-000'>
      
      <div className={
        `intro_section ${style.backgroundImage ? 'page-backgroundImage' : ''}`} style={style}>
        <div className='pagebody'>
          <div className='wrapper' style={{gridTemplateColumns: '55% 45%'}}>
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
                  <Button className='home0buttons' compId='button1' onClick={() => {}} label='My Portfolio'/>
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
            <div>
              <DragDropFileUploader
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
              />
            </div>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default HomePageZero;
