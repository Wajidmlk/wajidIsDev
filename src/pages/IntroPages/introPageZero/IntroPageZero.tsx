import React from 'react';
import { tpPageStructure } from '../../../common/commonTypes';
import CardBox from '../../../components/cards/cardBox/CardBox';
import SkillsBox from '../skillsBox/SkillsBox';
import { Button } from '../../../components/buttons/Button';
import { saveAs } from "file-saver";
import { tpIconCODE } from '../../../appUtils/AppUtilities';

const WajidResume = require("../../../common/resume/WajidResumeDec.pdf");

const data = [
  {
    image: "AppRegistration",
    title: "Customizable",
    para: `Mind-set of creating highly customizable web-apps`,
    defaultHeight: undefined,
    defaultWidth: "250",
  },
  {
    image: "Palette",
    title: "Themes",
    para: `Provide multiple options to switch your app's look`,
    defaultHeight: undefined,
    defaultWidth: "250",
  },
  {
    image: "SettingsSuggest",
    title: "Settings",
    para: `Apps configurable & setup-able.
      custom translations & modes`,
    defaultHeight: undefined,
    defaultWidth: "250",
  },
  {
    image: "QueryStats",
    title: "Panels",
    para: `Dynamic apps keep track of
    page visits & app traffic`,
    defaultHeight: undefined,
    defaultWidth: "250",
  },
];

const IntroPageZero = ({page}: {page: tpPageStructure}) => {
  const { style, pageId } = page;
  return (
    <div id={pageId} className={
      `introPage-000 ${style.backgroundImage ? 'page-backgroundImage' : ''}`} style={style}>
      <div className="showcase-card-boxes">
        {
          data.map(({image, defaultHeight, defaultWidth, para, title}) => (
            <CardBox
              image={{type:"icon", element: image as tpIconCODE}}
              title={title}
              para={para}
              defaultHeight={defaultHeight}
              defaultWidth={defaultWidth}
            />
          ))
        }
      </div>
      <div className='grid'>
        <div className='box' style={{width: "40%", marginBottom: 20}}>
            <CardBox
              className='showcase'
              image={{
                type: "element",
                element: <div
                  className='showcase-inside-image page-backgroundImage'
                  style={{backgroundImage: 'url(https://thumbs.dreamstime.com/b/front-end-applications-color-concept-binary-code-digital-technology-background-web-abstract-programming-created-virus-242773661.jpg)'}}
                ></div>
              }}
              defaultHeight={"100%"}
              defaultWidth={"100%"}
              children={
                <Button
                  compId='button000'
                  label='Save My Resume...'
                  onClick={() => saveAs(WajidResume, "Wajid's Resume.pdf")}
                />
              }
            />
        </div>
        <div className='box' style={{width: "50%"}}>
         <SkillsBox />
        </div>
      </div>
    </div>
  );
};

export default IntroPageZero;
