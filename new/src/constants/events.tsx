import MainEventMainIcon from "../assets/event-icons/Upcoming_Gamecraft.png";
import MainEventSideIcon from "../assets/event-icons/target.svg";
import EventIcon1 from "../assets/event-icons/Upcoming_Events_ProjectDev.png";
import EventIcon2 from "../assets/event-icons/Upcoming_Events_Level1Games.png";

export const MAIN_EVENT = {
  name: "GameCraft! 2024",
  details: ["Dec 2024", "Game Jam", "7 Days", "50+ Participants"],
  link: "https://gamecraft.nusgdg.org/",
  mainIcon: MainEventMainIcon,
  sideIcon: MainEventSideIcon,
  date: new Date("2024-12-14"),
};

export const EVENTS = [
  {
    name: "Project: Dev",
    details: ["Sep 2024", "Game Project", "1 Semester", "9 Teams"],
    description:
      "Show off your new game dev skills by forming a team to make a basic level 1 game!" +
      " Or you can also choose to join one of the Project: Dev teams if you’re up for a bigger challenge.",
    link: "https://itch.io/c/2570142/project-dev",
    icon: EventIcon1,
  },
  {
    name: "Level 1 Games",
    details: ["Sep 2024", "Game Project", "1 Semester", "5 Teams"],
    description:
      "Show off your new game dev skills by forming a team to make a basic level 1 game!" +
      " Or you can also choose to join one of the Project: Dev teams if you’re up for a bigger challenge.",
    link: "https://itch.io/c/2570122/level-1-games",
    icon: EventIcon2,
  },
];
