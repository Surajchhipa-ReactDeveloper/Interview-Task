import React, { useEffect } from "react";
import "./Technology.css";
const Technology = (props) => {
  return (
    <>
      <div className="Technology_Container">
        <div className="Technology_Name">{props.TechName}</div>
        <div className="Technology_Type">
          <ul>
            <li>{props.Tech1}</li>
            <br />
            <li>{props.Tech2}</li>
            <br />
            <li>{props.Tech3}</li>
            <br />
            <li>{props.Tech4}</li>
            <br />
            <li>{props.Tech5}</li>
            <br />
          </ul>
        </div>
        <button className="Technology_Button" onClick={props.TechClick}>
          {props.TechBtn}
        </button>
      </div>
    </>
  );
};

export default Technology;
