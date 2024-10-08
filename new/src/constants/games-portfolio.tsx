import Thumbnail2023 from "../assets/portfolio-thumbnails/sliggy_the_slime.png";
import Thumbnail2022 from "../assets/portfolio-thumbnails/the_runic_conjecture.png";
import Thumbnail2021 from "../assets/portfolio-thumbnails/A2wJky66rH_cover.png";
import Thumbnail2020 from "../assets/portfolio-thumbnails/kitten_mitten_cover.png";
import Thumbnail2019 from "../assets/portfolio-thumbnails/memory_lanes_cover.png";
import Thumbnail2018 from "../assets/portfolio-thumbnails/cogworks_cover.png";
import Webm2023 from "../assets/portfolio-thumbnails/sliggy_the_slime.webm";
import Webm2022 from "../assets/portfolio-thumbnails/the_runic_conjecture.webm";
import Webm2021 from "../assets/portfolio-thumbnails/A2wJky66rH.webm";
import Webm2020 from "../assets/portfolio-thumbnails/kittenmitten.webm";
import Webm2019 from "../assets/portfolio-thumbnails/memorylanes.webm";
import Webm2018 from "../assets/portfolio-thumbnails/cogworks.webm";

type PortfolioItemsType = {
  link: string;
  videoSrc: string;
  imgSrc: string;
  buttonLabel: string;
  heading: string;
  description: string;
};

export const portfolioItemsInfo: PortfolioItemsType[] = [
  {
    link: "https://kzfsg.itch.io/sliggy-the-slime",
    videoSrc: Webm2023,
    imgSrc: Thumbnail2023,
    buttonLabel: "GameCraft 2023",
    heading: "Sliggy the Slime",
    description:
      "Sliggy the Slime is a unique puzzle-platformer with a twist. Kidnapped by Dr. Doofus, Sliggy must navigate a treacherous lab, unlock paths, and escape.",
  },

  {
    link: "https://lio-lim.itch.io/the-runic-conjecture",
    videoSrc: Webm2022,
    imgSrc: Thumbnail2022,
    buttonLabel: "GameCraft 2022",
    heading: "The Runic Conjecture",
    description:
      "The Runic Conjecture is a magical puzzle game about experimenting and learning the meaning of mysterious runes. What may seem like Magic now is merely a Science that you have yet to understand.",
  },

  {
    link: "https://graphcalibur.itch.io/a2wjky66rh",
    videoSrc: Webm2021,
    imgSrc: Thumbnail2021,
    buttonLabel: "GameCraft 2021",
    heading: "A2wJky66rH",
    description:
      "You play as a spider-esque creature with the ability to amputate one of its four legs. Doing so causes you to lose the ability to move in the direction corresponding to that leg. Use this to solve puzzles and navigate the mazes inside the game.",
  },
  {
    link: "https://lapisraider.itch.io/kitten-mitten",
    videoSrc: Webm2020,
    imgSrc: Thumbnail2020,
    buttonLabel: "GameCraft 2020",
    heading: "Kitten Mitten",
    description:
      "When it comes to the game of catching mice, no one can even come close to you. Your child on the other hand...although very eager to do the same as you, is still quite inexperienced...",
  },
  {
    link: "https://sonatines.itch.io/memory-lanes",
    videoSrc: Webm2019,
    imgSrc: Thumbnail2019,
    buttonLabel: "GameCraft 2019",
    heading: "Memory Lanes",
    description:
      "Memory Lanes is a puzzle game where the player leads the character through mazes with walls and non-player characters (NPCs) while manipulating the state of the world around them to reach the goal...",
  },
  {
    link: "https://cronyx.itch.io/cogworks",
    videoSrc: Webm2018,
    imgSrc: Thumbnail2018,
    buttonLabel: "GameCraft 2018",
    heading: "Cogworks",
    description:
      "Game description is a game that features this and that. The objective of this game is to perform all of the objectives to reach the ending. Players play as a thing and need to get pass stages to get to the end. Hello this is a description.",
  },
];
