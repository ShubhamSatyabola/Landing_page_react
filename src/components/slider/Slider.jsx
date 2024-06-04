import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"
import slide_image_1 from "../../assets/images/1.png";
import slide_image_2 from "../../assets/images/2.png";
import slide_image_3 from "../../assets/images/3.png";
import slide_image_4 from "../../assets/images/4.png";
import slide_image_5 from "../../assets/images/5.png";


function App() {
  
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      
      variableWidth: true,
     
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 2000,
    };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={slide_image_1} alt="slide_image" />
        </div>
        <div>
          <img src={slide_image_2} alt="slide_image" />
        </div>
        <div>
          <img src={slide_image_3} alt="slide_image" />
        </div>
        <div>
          <img src={slide_image_4} alt="slide_image" />
        </div>
        <div>
          <img src={slide_image_5} alt="slide_image" />
        </div>
      </Slider>
    </div>
  );
}

export default App;
