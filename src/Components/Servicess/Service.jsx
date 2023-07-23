import React from "react";
import "./Service.css";
import "./ServiceMd.css";
import SType from "../../Common/ServiceType/Stype";
import { Icon } from "../../Constant/IconPath";

const Service = () => {
  return (
    <>
      <div className="Service_Container">
          <div className="Service_Container_top">
            <div className="Service_heading">
              What <span className="ServiceSpan">We Do</span>
            </div>
            <div className="Service_Title">
              As experts in the field of autonomous agents, we create, design,
              and develop software applications that operate on behalf of the
              user. Our expertise lies in the Fetch.ai AEA framework and uAgents
              library, tools that allow us to construct dynamic, autonomous
              systems.
            </div>
          </div>
        <div className="Service_Button_Container">
          <SType
            STimg={Icon.Code}
            SHead={"Development"}
            SAbout={
              "Create a platform with the best and coolest quality from us."
            }
          />
          <SType
            STimg={Icon.UxUi}
            SHead={"UI/UX Designer"}
            SAbout={
              "We provide UI/UX Design services, and of course with the best quality"
            }
          />
          <SType
            STimg={Icon.Graph}
            SHead={"Graphik Designer"}
            SAbout={
              "We provide Graphic Design services, with the best designers"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Service;
