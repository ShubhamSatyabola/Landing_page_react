import Navbar from "../../components/navbar/Navbar"
import Ecllipse from "../../components/buttons/ecllipseBtn/Ecllipse"
import Slider from "../../components/slider/Slider"
import AboutUs from "../../components/aboutUs/AboutUs"
import "./homePage.css"


const HomePage = () => {
  return (
    <>
      <section className="heroSection">
        <nav className="navbarContainer">
          <Navbar />
        </nav>
        <div className="heroContainer">
          <div className="heroContent">
            <h1 className="heading">
              Discover the Latest Issue of{" "}
              <span className="span1">Upwealth</span>
              <span className="span2"> Magazine</span>
            </h1>
            <p className="description">
              Stay informed with our insightful articles and expert advice.
            </p>
            <button className="subscribeButton">Subscribe Button</button>
            <Ecllipse />
          </div>
          <div className="heroSlider">
            <Slider />
          </div>
        </div>
      </section>
      <section>
        <AboutUs />
      </section>
    </>
  );
}
export default HomePage