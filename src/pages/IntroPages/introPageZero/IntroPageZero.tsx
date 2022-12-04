import { tpPageStructure } from '../../../common/commonTypes';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PaletteIcon from '@mui/icons-material/Palette';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CardBox from '../cardBox/CardBox';
import SkillsBox from '../skillsBox/SkillsBox';
import { Button } from '../../../components/buttons/Button';
import { saveAs } from "file-saver";

const WajidResume = require("../../../common/resume/WajidResume.pdf");

const data = [
  {
    image: <AppRegistrationIcon />,
    title: "Customizable",
    para: `Mind-set of creating highly customizable web-apps`,
    defaultHeight: undefined,
    defaultWidth: "250",
  },
  {
    image: <PaletteIcon />,
    title: "Themes",
    para: `Provide multiple options to switch your app's look`,
    defaultHeight: undefined,
    defaultWidth: "250",
  },
  {
    image: <SettingsSuggestIcon />,
    title: "Settings",
    para: `Apps configurable & setup-able.
      custom translations & modes`,
    defaultHeight: undefined,
    defaultWidth: "250",
  },
  {
    image: <QueryStatsIcon />,
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
              image={image}
              title={title}
              para={para}
              defaultHeight={defaultHeight}
              defaultWidth={defaultWidth}
            />
          ))
        }
      </div>
      <div className='grid' style={{gridTemplateColumns: '40% 58%'}}>
        <div className='box'>
            <CardBox
              className='showcase'
              image={
                <div
                  className='showcase-inside-image page-backgroundImage'
                  style={{backgroundImage: 'url(https://meritglobaltraining.com/backend/uploads/e29544dbabbcd8ae3eb604d30e3478eb.jpg)', backgroundAttachment: "scroll"}}
                ></div>}
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
        <div className='box'>
         <SkillsBox />
        </div>
      </div>
    </div>
  );
};

export default IntroPageZero;
