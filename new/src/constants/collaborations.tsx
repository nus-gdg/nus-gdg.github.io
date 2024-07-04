import paperPlane from "../assets/logos/paper-plane.png";
import shuttle from "../assets/logos/shuttle.png";

type Collaboration = {
  image: string;
  level: string;
  title: string;
  description: string;
};

export const COLLABORATIONS: Collaboration[] = [
  {
    image: paperPlane,
    level: "Beginner",
    title: "Level 1 Games",
    description:
      "Level 1 Games equipts new game developers with the tools and skills to build basic games. " +
      "They are a great way to get started with game development, working with your randomly assigned teammates to build your first game. " +
      "An exco will be attached to each team to guide you through the project.",
  },
  {
    image: shuttle,
    level: "Advanced",
    title: "Project Dev",
    description:
      "Project Dev is a more advanced game development project that is largely independent. " +
      "It allows the more experienced devs to work together and create their own games. " +
      "An exco member will be attached to each group to provide tips and field queries as needed.",
  },
];
