import CrownIcon from "../../assets/icons/portfolio-icon2.svg";

const PortfolioItem = ({
  link,
  videoSrc,
  imgSrc,
  buttonLabel,
  heading,
  description,
}: {
  link: string;
  videoSrc: string;
  imgSrc: string;
  buttonLabel: string;
  heading: string;
  description: string;
}) => (
  <div className="col-lg-4 col-sm-6 mb-4">
    <div className="portfolio-item">
      <a className="portfolio-link" href={link}>
        <div className="portfolio-hover">
          <div className="portfolio-hover-content">
            <video autoPlay loop width="100%" muted src={videoSrc}></video>
          </div>
        </div>
        <img className="img-fluid portfolio-image" src={imgSrc} alt="..." />
      </a>
      <div className="portfolio-button">
        <img src={CrownIcon} alt="..." />
        {buttonLabel}
      </div>
      <div className="portfolio-caption">
        <div className="portfolio-caption-heading">{heading}</div>
        <div className="portfolio-caption-subheading text-muted">{description}</div>
      </div>
      <div className="view-details">
        <a className="portfolio-link" href={link}>
          View Details →
        </a>
      </div>
    </div>
  </div>
);

export default PortfolioItem;
