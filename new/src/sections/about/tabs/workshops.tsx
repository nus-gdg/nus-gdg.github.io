import workshopMainImage from "../../../assets/images/workshops-main.svg";
import Button from "../../../components/button/button";
import { NUSGDG_YOUTUBE_CHANNEL } from "../../../constants/about";
import { WORKSHOPS } from "../../../constants/workshops";

const Workshops = (): JSX.Element => {
  return (
    <div className="workshops">
      <div className="workshops-main">
        <div className="workshops-main-image">
          <img src={workshopMainImage} alt="" />
        </div>
        <div className="workshops-main-text">
          <div className="workshops-main-text-title">Your Gateway to Game Development Mastery</div>
          <div className="workshops-main-text-content">
            <p>
              Step into the exhilarating world of game creation with our specialized workshops and tutorials! Designed
              for both newcomers and seasoned developers, our hands-on sessions offer practical skills, industry
              insights, and a supportive community to help you level up your game development journey.
            </p>
            <p>
              Whether you're keen to master the fundamentals or ready to tackle advanced topics, we provide an enriching
              curriculum that evolves with you. Don't just play games—learn to build them from scratch and make your
              creative mark on the gaming universe!
            </p>
          </div>
        </div>
        <div className="workshops-main-button">
          <Button onClick={() => window.open(NUSGDG_YOUTUBE_CHANNEL, "_blank")}>
            <a href={NUSGDG_YOUTUBE_CHANNEL} target="_blank" rel="noreferrer">
              NUSGDG Youtube Channel
            </a>
          </Button>
        </div>
      </div>
      <div className="workshops-list">
        {WORKSHOPS.map((workshop) => (
          <a href={workshop.link} key={workshop.title} className="workshops-list-item">
            <div className="workshops-list-item-image">
              <img src={workshop.image} alt="" />
            </div>
            <div className="workshops-list-item-details">
              <div className="workshops-list-item-decor">
                <div>{workshop.category}</div>
                <div>•</div>
                <div>{workshop.duration}</div>
              </div>
              <div className="workshops-list-item-title">{workshop.title}</div>
              <div className="workshops-list-item-description">{workshop.description}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Workshops;
