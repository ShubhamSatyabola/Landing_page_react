import Logo from "../../../public/logo.png";
import { useState } from "react";
import { Icon } from "@iconify/react";
import "./footer.css";

export const Footer = () => {


  const [hovered, setHovered] = useState(null);

  const handleHover = (value) => {
    setHovered(value);
  };

  const handleLeave = () => {
    setHovered(null);
  };

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-Items">
          <img src={Logo} alt="logo" className="footer-logo" />

          <div className="footer-buttons">
            <p className="item">Home</p>

            <p
              className="item"
              onMouseEnter={() => handleHover("kaltech")}
              onMouseLeave={handleLeave}
            >
              {hovered === "kaltech" ? "Kaltech Consultancy" : "Kaltech"}
            </p>

            <p
              className="item"
              onMouseEnter={() => handleHover("insurance")}
              onMouseLeave={handleLeave}
            >
              {hovered === "insurance"
                ? "Insurance Life Magazine"
                : "Insurance Life"}
            </p>
          </div>
        </div>

        <div className="social-buttons">
          <Icon className="icon" icon="ant-design:facebook-filled" />
          <Icon className="icon" icon="akar-icons:instagram-fill" />
          <Icon className="icon" icon="ant-design:linkedin-filled" />
          <Icon className="icon" icon="ri:twitter-x-fill" />
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer-text">
        <p>© 2022 - 2024 | All rights reserved by Kaltech Designs</p>
      </div>
    </div>
  );
};
    