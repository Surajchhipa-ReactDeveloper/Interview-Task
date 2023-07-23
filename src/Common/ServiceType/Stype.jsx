import React from "react";
import "./Stype.css";
import Fade from "react-reveal/Fade";

const SType = ({ SAbout, SHead, STimg }) => {
  return (
    <>
      <Fade bottom>
        <div className="SType_Container">
          <div className="SType_Img_Container">
            <img src={STimg} alt="" className="STypeLogo" />
          </div>
          <div className="SType_Heading">{SHead}</div>
          <div className="SType_about">{SAbout}</div>
        </div>
      </Fade>
    </>
  );
};

export default SType;
