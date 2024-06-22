import MainEventMainIcon from "../assets/event-icons/laptop.svg";
import MainEventSideIcon from "../assets/event-icons/target.svg";
import EventIcon1 from "../assets/event-icons/tabs-1.svg";
import EventIcon2 from "../assets/event-icons/tabs-2.svg";

export const MAIN_EVENT = {
  name: "GameCraft 2023",
  details: ["Dec 2023", "Game Jam", "7 Days", "50+ Participants"],
  link: "https://gamecraft.nusgdg.org/",
  mainIcon: MainEventMainIcon,
  sideIcon: MainEventSideIcon,
  date: new Date("2023-12-09"),
};

export const EVENTS = [
  {
    name: "Project: Dev",
    details: ["Sep 2023", "Game Project", "1 Semester", "9 Teams"],
    description:
      "Show off your new game dev skills by forming a team to make a basic level 1 game!" +
      " Or you can also choose to join one of the Project: Dev teams if you’re up for a bigger challenge.",
    link: "nusgdg.org/",
    icon: EventIcon1,
  },
  {
    name: "Level 1 Games",
    details: ["Oct 2023", "Game Project", "1 Semester", "5 Teams"],
    description:
      "Show off your new game dev skills by forming a team to make a basic level 1 game!" +
      " Or you can also choose to join one of the Project: Dev teams if you’re up for a bigger challenge.",
    link: "nusdgd.org/",
    icon: EventIcon2,
  },
];
