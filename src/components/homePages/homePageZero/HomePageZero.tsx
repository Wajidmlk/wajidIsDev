import React from "react";
import "./homePageZero.scss";
import Typewriter from "typewriter-effect";
import { userIntroData } from "./../../../common/staticApp/AppStaticData";
import { Link } from "react-router-dom";

const HomePageZero = () => {
  return (
    <div id="home" className="homePage-000">
      
      <div className="intro_section">
        <div
          className="page000-backgroundImage"
          style={{ backgroundImage: `url(${userIntroData.your_img_url})`}}
        ></div>
        
      </div>
    </div>
  );
};

export default HomePageZero;
