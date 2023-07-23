import React from "react";
import "./Stype.css";

const SType = ({ SAbout, SHead, STimg }) => {
  return (
    <>
      <div className="SType_Container">
        <div className="SType_Img_Container">
          <img src={STimg} alt="" className="STypeLogo" />
        </div>
        <div className="SType_Heading">{SHead}</div>
        <div className="SType_about">{SAbout}</div>
      </div>
    </>
  );
};

export default SType;
