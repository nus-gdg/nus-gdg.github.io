import Button from "../../components/button/button";
import landingImage from "../../assets/images/landing-placeholder.svg";

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
        <div className="home-banner">
          <img src={landingImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
