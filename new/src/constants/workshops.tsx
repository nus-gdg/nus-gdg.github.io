import unity1 from "../assets/images/yt-unity-1.webp";
import unity2 from "../assets/images/yt-unity-2.webp";
import unity3 from "../assets/images/yt-unity-3.webp";
import unity4 from "../assets/images/yt-unity-4.webp";
import godot2 from "../assets/images/yt-godot-2.jpg";
import godot3 from "../assets/images/yt-godot-3.jpg";
import godot4 from "../assets/images/yt-godot-4.jpg";
import ece1 from "../assets/images/yt-ece-1.webp";
import ece2 from "../assets/images/yt-ece-2.webp";
import music1 from "../assets/images/yt-music-1.webp";

type WorkshopItem = {
  title: string;
  duration: string;
  category: string;
  description: string;
  link: string;
  image: string;
};

export const WORKSHOPS: WorkshopItem[] = [
  {
    title: "[GameStart 2023] Unity Workshop (Week 1)",
    duration: "1h 24m",
    category: "Unity",
    description: "NUSGDG teaches the basics of the Unity game engine!",
    link: "https://www.youtube.com/watch?v=fGL5vCjmYHg&list=PL4Yjq9yLt-GgmQ7UUOEoAJdAuaGyzI2nN",
    image: unity1,
  },
  {
    title: "[GameStart 2023] Music Workshop (Week 1)",
    duration: "2h 10m",
    category: "Music",
    description: "NUSGDG teaches the basics of music in games!",
    link: "https://www.youtube.com/watch?v=WoTkTVByQbY&list=PL4Yjq9yLt-GgmQ7UUOEoAJdAuaGyzI2nN",
    image: music1,
  },
  {
    title: "NUS ECE-GDG Game Development Beginner Workshop Day 1",
    duration: "1h 59m",
    category: "Godot",
    description:
      "A beginner game development workshop hosted by NUSGDG in collaboration " +
      "with the Electrical and Computer Engineering (ECE) Club and Undergraduate Student Council (USC).",
    link: "https://www.youtube.com/watch?v=_s2NFMLw_pQ&list=PL4Yjq9yLt-GgmQ7UUOEoAJdAuaGyzI2nN",
    image: ece1,
  },
  {
    title: "NUS ECE-GDG Game Development Beginner Workshop Day 2",
    duration: "2h 2m",
    category: "Godot",
    description:
      "A beginner game development workshop hosted by NUSGDG in collaboration " +
      "with the Electrical and Computer Engineering (ECE) Club and Undergraduate Student Council (USC).",
    link: "https://www.youtube.com/watch?v=wN8FZhlIgdc&list=PL4Yjq9yLt-GgmQ7UUOEoAJdAuaGyzI2nN",
    image: ece2,
  },
  {
    title: "[GameStart 2023] Godot Workshop (Week 2)",
    duration: "1h 48m",
    category: "Godot",
    description: "NUSGDG teaches the basics of the Godot game engine!",
    link: "https://www.youtube.com/watch?v=0FFksyBZsAg&list=PL4Yjq9yLt-GgmQ7UUOEoAJdAuaGyzI2nN",
    image: godot2,
  },
  {
    title: "[GameStart 2023] Unity Workshop (Week 2)",
    duration: "1h 55m",
    category: "Unity",
    description: "NUSGDG teaches the basics of the Unity game engine!",
    link: "https://www.youtube.com/watch?v=Deu0LE9oErM&list=PL4Yjq9yLt-GgmQ7UUOEoAJdAuaGyzI2nN",
    image: unity2,
  },
  {
    title: "[GameStart 2023] Godot Workshop (Week 3)",
    duration: "1h 55m",
    category: "Godot",
    description: "NUSGDG teaches the basics of the Godot game engine!",
    link: "https://www.youtube.com/watch?v=8UJTDPMlJ-M&list=PL4Yjq9yLt-GgmQ7UUOEoAJdAuaGyzI2nN",
    image: godot3,
  },
  {
    title: "[GameStart 2023] Unity Workshop (Week 3)",
    duration: "1h 59m",
    category: "Unity",
    description: "NUSGDG teaches the basics of the Unity game engine!",
    link: "https://www.youtube.com/watch?v=TRAxiG4qpHI&list=PL4Yjq9yLt-GgmQ7UUOEoAJdAuaGyzI2nN",
    image: unity3,
  },
  {
    title: "[GameStart 2023] Godot Workshop (Week 4)",
    duration: "2h 1m",
    category: "Godot",
    description: "NUSGDG teaches the basics of the Godot game engine!",
    link: "https://www.youtube.com/watch?v=7grGwDIVZ38&list=PL4Yjq9yLt-GgmQ7UUOEoAJdAuaGyzI2nN",
    image: godot4,
  },
  {
    title: "[GameStart 2023] Unity Workshop (Week 4)",
    duration: "2h 13m",
    category: "Unity",
    description: "NUSGDG teaches the basics of the Unity game engine!",
    link: "https://www.youtube.com/watch?v=z_gPXeS7n9Q&list=PL4Yjq9yLt-GgmQ7UUOEoAJdAuaGyzI2nN",
    image: unity4,
  },
];
