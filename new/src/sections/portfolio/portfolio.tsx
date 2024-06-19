import HeaderIcon from '../../assets/icons/portfolio-icon.png';
import PortfolioItem from './portfolioItem';
import Thumbnail2021 from '../../assets/portfolio-thumbnails/A2wJky66rH_cover.png';
import Thumbnail2020 from '../../assets/portfolio-thumbnails/kitten_mitten_cover.png';
import Thumbnail2019 from '../../assets/portfolio-thumbnails/memory_lanes_cover.png';
import Thumbnail2018 from '../../assets/portfolio-thumbnails/cogworks_cover.png';
const Webm2021 = require('../../assets/portfolio-thumbnails/A2wJky66rH.webm');
const Webm2020 = require('../../assets/portfolio-thumbnails/kittenmitten.webm');
const Webm2019 = require('../../assets/portfolio-thumbnails/memorylanes.webm');
const Webm2018 = require('../../assets/portfolio-thumbnails/cogworks.webm');

const portfolioItems = [
  {
    link: 'https://itch.io/jam/gamecraft-2021/rate/1322788',
    videoSrc: Webm2021,
    imgSrc: Thumbnail2021,
    buttonLabel: 'GameCraft 2021',
    heading: 'A2wJky66rH',
    description: 'You play as a spider-esque creature with the ability to amputate one of its four legs. Doing so causes you to lose the ability to move in the direction corresponding to that leg. Use this to solve puzzles and navigate the mazes inside the game.'
  },
  {
    link: 'https://lapisraider.itch.io/kitten-mitten',
    videoSrc: Webm2020,
    imgSrc: Thumbnail2020,
    buttonLabel: 'GameCraft 2020',
    heading: 'Kitten Mitten',
    description: 'When it comes to the game of catching mice, no one can even come close to you. Your child on the other hand...although very eager to do the same as you, is still quite inexperienced...'
  },
  {
    link: 'https://sonatines.itch.io/memory-lanes',
    videoSrc: Webm2019,
    imgSrc: Thumbnail2019,
    buttonLabel: 'GameCraft 2019',
    heading: 'Memory Lanes',
    description: 'Memory Lanes is a puzzle game where the player leads the character through mazes with walls and non-player characters (NPCs) while manipulating the state of the world around them to reach the goal...'
  },
  {
    link: 'https://cronyx.itch.io/cogworks',
    videoSrc: Webm2018,
    imgSrc: Thumbnail2018,
    buttonLabel: 'GameCraft 2018',
    heading: 'Cogworks',
    description: 'Game description is a game that features this and that. The objective of this game is to perform all of the objectives to reach the ending. Players play as a thing and need to get pass stages to get to the end. Hello this is a description.'
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="header-portfolio">
          <div className="icon-portfolio">
            <img src={HeaderIcon} />
          </div>
          <div className="heading-portfolio">Past game projects</div>
          <div className="subheading-portfolio">Our Portfolio</div>
        </div>
        <div className="row">
          {portfolioItems.map((item, index) => (
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
        <div className="view-all-projects">View All Projects</div>
      </div>
    </div>
  );
};

export default Portfolio;
