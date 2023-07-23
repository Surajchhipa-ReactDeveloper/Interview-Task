import React from "react";
import "./HomePage.css";
import "./HomePageMd.css";
import { Icon } from "../../Constant/IconPath";
import Fade from "react-reveal/Fade";

const HomePage = () => {
  return (
    <>
      <div className="Hero_Page_Container">
        <Fade left>
          <div className="Hero_left_Container">
            <div className="Hero_Heading">
              Great software is built with<span> amazing developers</span>
            </div>
            <div className="Hero_Title">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </div>
            <div className="Hero_Button">
              <button className="HeroBtn">Get Start</button>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="Hero_Right_Container">
            <img src={Icon.MainChair_LOgo} alt="" className="MainImg" />
          </div>
        </Fade>
      </div>
    </>
  );
};

export default HomePage;
