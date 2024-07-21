import weekFiveGameJam from "../assets/images/about-week5-game-jam.png";
import summerGameJam from "../assets/images/about-summer-game-jam.png";
import gamecraft from "../assets/images/about-gamecraft.png";

type GameJam = {
  image: string;
  title: string;
  period: string;
  description: string;
};

export const GAMEJAMS: GameJam[] = [
  {
    image: weekFiveGameJam,
    title: "Week 5 Game Jam",
    period: "Week 5 Semester 1 & Semester 2",
    description:
      "Week 5 Game Jam is an avenue for members to showcase " +
      "their game development skills within a one-day game jam.",
  },
  {
    image: summerGameJam,
    title: "Summer Game Jam",
    period: "August",
    description:
      "Summer Game Jam is to engage students over the summer " +
      "and showcase our games during NUS Student Life Fair (SLF).",
  },
  {
    image: gamecraft,
    title: "GameCraft!",
    period: "December",
    description: "Gamecraft is a friendly competition to showcase all of our skills throughout the year.",
  },
];
