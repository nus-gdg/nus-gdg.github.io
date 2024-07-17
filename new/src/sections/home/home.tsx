import Button from "../../components/button/button";
import landingImage from "../../assets/images/landing.svg";
import homeBgIcon1 from "../../assets/icons/home1.svg";
import homeBgIcon2 from "../../assets/icons/home2.svg";
import homeBgIcon3 from "../../assets/icons/home3.svg";
import homeBgIcon4 from "../../assets/icons/home4.svg";

const Home = (): JSX.Element => {
  return (
    <div id="home" className="home">
      <div className="home-left">
        <div className="home-text">
          <div className="home-text-lg">
            Unlock your <span className="home-text-creative">Creative </span> Potential in Game Development!
          </div>
          <div className="home-text-sm">
            Turn your enthusiasm for gaming into a talent for creating compelling, immersive experiences - no prior
            experience necessary, beginners are warmly welcomed!
          </div>
        </div>
        <div className="home-learn-more">
          <Button onClick={() => (window.location.hash = "#about")}>
            <a href="#about" className="home-learn-more-text">
              Learn More
            </a>
          </Button>
        </div>
      </div>
      <div className="home-banner">
        <img src={landingImage} alt="" />
      </div>
      <div className="home-bg-icons">
        <div className="home-bg-icon home-bg-icon-1">
          <img src={homeBgIcon1} alt="" />
        </div>
        <div className="home-bg-icon home-bg-icon-2">
          <img src={homeBgIcon2} alt="" />
        </div>
        <div className="home-bg-icon home-bg-icon-3">
          <img src={homeBgIcon3} alt="" />
        </div>
        <div className="home-bg-icon home-bg-icon-4">
          <img src={homeBgIcon4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
