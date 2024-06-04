import { useState } from "react";

// import { AboutUs } from "../../components/about/AboutUs";

import EclipseTextOne from "../../assets/images/UPWEALTH (1).png"
// import EclipseTextTwo from "../../assets/images/eclipse-text-two.png";
import EclipseTextThree from "../../assets/images/UPWEALTH.png";
import EclipseTopLeft from "../../assets/images/Property 1=Default (1).png";
import EclipseTopRight from "../../assets/images/Property 1=Default (2).png";
import EclipseBottomRight from "../../assets/images/Property 1=Default.png";
import EclipseBottomLeft from "../../assets/images/Property 1=Default (3).png";
import EclipseCenterImg from "../../assets/images/Rectangle 24.png";
import "./aboutUs.css";
import TopLeftVariant from "../../assets/images/Property 1=Variant2 (1).png";
import TopRightVariant from "../../assets/images/Property 1=Variant2 (2).png";
import BottomLeftVariant from "../../assets/images/Property 1=Variant2.png";
import BottomRightVariant from "../../assets/images/Property 1=Variant2 (3).png";
import Ecllipse from "../buttons/ecllipseBtn/Ecllipse";

const AboutUs = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [clickIndex, setClickIndex] = useState(null);

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = (index) => {
    setClicked(true);
    setClickIndex(index);
  };
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="eclipse-one">
          <div className="top-images">
            <img
              src={
                hovered && clicked && clickIndex === 1
                  ? TopLeftVariant
                  : EclipseTopLeft
              }
              alt="Top Left"
              className="top-image"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(1)}
            />
            <img
              src={
                hovered && clicked && clickIndex === 2
                  ? TopRightVariant
                  : EclipseTopRight
              }
              alt="Top Right"
              className="top-image"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(2)}
            />
          </div>
          <div className="text-div">
            <img src={EclipseTextOne} alt="Text One" className="text-image" />
            <img src={EclipseTextOne} alt="Text Two" className="text-image" />
            <img
              src={EclipseTextThree}
              alt="Text Three"
              className="text-image"
            />
            <div className="bottom-images">
              <img
                src={
                  hovered && clicked && clickIndex === 3
                    ? BottomLeftVariant
                    : EclipseBottomRight
                }
                alt="Bottom Left"
                className="bottom-image"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(3)}
              />
              <img
                src={
                  hovered && clicked && clickIndex === 4
                    ? BottomRightVariant
                    : EclipseBottomLeft
                }
                alt="Bottom Right"
                className="bottom-image"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(4)}
              />
            </div>
          </div>
          <div className="eclipse-two">
            <div className="center-image-container">
              <div className="center-image-overlay"></div>
              <img
                src={EclipseCenterImg}
                alt="Center"
                className="center-image"
              />
            </div>
          </div>
        </div>
        <div className="aboutUsContainer">
          <h1 className="headingAbout">About Us</h1>
          <div className="main">
            <div className="content">
              <h1>Grow your net worth by growing your network.</h1>
            </div>
            <div className="aboutDivider"></div>
            <div className="descriptionAbout">
              UpWealth magazine is a premier magazine for entrepreneurs by
              entrepreneurs. Do you ever wonder how entrepreneurs become
              debt-free and financially free while spending time with their
              loved ones and doing the thing they enjoy? Well, look no further.
              UPWealth has all the answers you need. Read from small to large
              business owners who have mastered the art of creating and
              maintaining business systems, sticking to their visions and
              persisting in their missions! The power of leveraging other
              businesses is unmatched.
            </div>
          </div>
          <div className="ecllipseBtn">
            <Ecllipse />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
