import React from "react";
import "./Contact.css";
import "./ContactMd.css";
import {Icon} from "../../Constant/IconPath"

const ContactUs = () => {
  return (
    <>
      <div className="Contact_Container">
        <div className="Contact_Main">
        <img src={Icon.happy} alt="" className="Emoji"/>
          <div className="Contact_Left_Container">
            <div className="Contact_Heading">Send Us A Message</div>
            <div className="Contact_Input">
              <div className="Name_Input">
                <input
                  className="Name_User"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="Email_Phone_Input">
                <input
                  className="Email"
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  className="Phone"
                  type="number"
                  placeholder="Phone Number"
                />
              </div>
              <div className="Query_Input">
                <input
                  className="Query"
                  type="text"
                  placeholder="Type Your Query Here..."
                />
              </div>
              <button className="SubmitBtn">Submit</button>
            </div>
          </div>
          {/* <div className="Contact_Right_Container"></div> */}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
