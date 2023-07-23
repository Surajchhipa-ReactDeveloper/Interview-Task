import React from "react";
import "./Abouts.css";
import "./AboutsMd.css";
import { Icon } from "../../Constant/IconPath";
// import { Link, useHref } from "react-router-dom";
import Technology from "../../Common/Technologg/Technology";

const Abouts = () => {
  const AboutClickButton = () => {
    window.open("https://docs.fetch.ai/aea-framework-documentation/", "_blank");
  };
  const OpenAFA = () => {
    window.open(
      "https://docs.fetch.ai/aea-framework-documentation/#the-aea-framework",
      "_personal"
    );
  };
  const OpenUAgent = () => {
    window.open("https://docs.fetch.ai/uAgents/", "_personal");
  };
  return (
    <div className="AboutUs_Container">
      <div className="About_US_top_Container">
        <div className="About_Left_Container">
          <div className="About_Left_IMG_Container">
            <img src={Icon.AboutImg} alt="" className="AboutImg" />
          </div>
        </div>
        <div className="About_Right_Container">
          <div className="About_Heading">
            Boost your technology by choosing
            <span className="AbSpan"> AgentsLab</span>
          </div>
          <div className="About_Title">
            We believe in the power of technology to make life easier, more
            efficient, and more exciting. Our team's deep understanding of
            autonomous agents technology allows us to create custom solutions
            for a variety of sectors, including finance, supply chain,
            healthcare, and more. With AgentsLab, you are choosing a partner
            committed to delivering innovation, efficiency, and real-world
            solutions.
          </div>
          <div className="AboutUs_Button">
            <button onClick={AboutClickButton} className="AboutBtn">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="AboutUS_Technology_Container">
        <div className="AboutUs_Main_heading">
          OUR <span className="ABTechSpan">TECHNOLOGY</span>
        </div>
        <div className="AboutUs_SubTitle">
          As experts in the field of autonomous agents, we create, design, and
          develop software applications that operate on behalf of the user. Our
          expertise lies in the Fetch.ai AEA framework and uAgents library,
          tools that allow us to construct dynamic, autonomous systems.
        </div>
        <div className="Technology_Container_Main">
          <Technology
            TechName={" AEA Framework"}
            Tech1={"Python"}
            Tech2={"Open source"}
            Tech3={"Modular"}
            Tech4={"Blockchain ready"}
            Tech5={"Modern"}
            TechBtn={"Learn More"}
            TechClick={OpenAFA}
          />

          <Technology
            TechName={"UAgents Library"}
            Tech1={"easy to learn"}
            Tech2={"customizable"}
            Tech3={"connected"}
            Tech4={"secure"}
            Tech5={"platform independent:"}
            TechBtn={"Learn More"}
            TechClick={OpenUAgent}
          />
        </div>
      </div>
    </div>
  );
};

export default Abouts;
