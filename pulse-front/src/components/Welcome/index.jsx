import React from "react";
import "./index.scss";
import WelcomeCards from "../WelcomeCards";
const Welcome = () => {
  return (
    <>
      <section id="welcome">
        <div className="welcome_container">
          <div className="welcome_content">
            <div className="welcome_title">
              <i class="fa-solid fa-ribbon"></i>
              <div className="welcome_title_content">
                <div className="line"></div>
                <h2>Welcome</h2>
                <div className="line"></div>
              </div>
            </div>
            <WelcomeCards/>
            <div className="welcome_img">
            <img src="https://preview.colorlib.com/theme/pulse/img/sign.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
