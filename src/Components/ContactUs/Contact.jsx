import React from "react";
import "./Contact.css";
import "./ContactMd.css";
import { Icon } from "../../Constant/IconPath";

const ContactUs = () => {
  // const TextArea = document.querySelector("textarea");
  // TextArea.addEventListener("keyup", (e) => {
  //   let TextHeight = e.target.scrollHeight;
  //   TextArea.style.height = `${TextHeight}px`;
  // });
  const adjustTextareaHeight = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  return (
    <>
      <div className="Contact_Container">
        <div className="Contact_Main">
          <img src={Icon.happy} alt="" className="Emoji" />
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
                <textarea
                  className="Query"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Type Your Query Here..."
                  required
                  onKeyUp={adjustTextareaHeight}
                ></textarea>
              </div>
              <button className="SubmitBtn">Submit</button>
            </div>
          </div>
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatibus fugit repellendus error, quibusdam totam eius nemo! Enim dolor laborum quis fugiat aspernatur eum deleniti, corrupti eaque optio nam error. */}
          {/* <div className="Contact_Right_Container"></div> */}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
