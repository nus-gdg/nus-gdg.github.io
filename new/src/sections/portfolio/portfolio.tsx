import React, { useState } from "react";
import HeaderIcon from "../../assets/icons/portfolio-icon.png";
import PortfolioItem from "./portfolio-item";
import { portfolioItemsInfo } from "../../constants/games-portfolio";

const Portfolio = (): JSX.Element => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(true);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="top-portfolio">
        <div className="icon-portfolio">
          <img src={HeaderIcon} alt="..." />
        </div>
        <div className="heading-portfolio">Past game projects</div>
        <div className="subheading-portfolio">Our Portfolio</div>
      </div>
      <div className="container">
        <div className="row">
          {portfolioItemsInfo.slice(0, showAll ? portfolioItemsInfo.length : 3).map((item, index) => (
            <PortfolioItem
              key={index}
              link={item.link}
              videoSrc={item.videoSrc}
              imgSrc={item.imgSrc}
              buttonLabel={item.buttonLabel}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </div>
        {!showAll && (
          <div className="view-all-projects" onClick={handleViewAll}>
            View All Projects
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
