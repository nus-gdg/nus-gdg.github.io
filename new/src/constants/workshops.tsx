import unity1 from "../assets/images/2025-unity-1.png";
import unity2 from "../assets/images/2025-unity-2.png";
import unity3 from "../assets/images/2025-unity-3.png";
import unity4 from "../assets/images/yt-unity-4.webp";
import godot2 from "../assets/images/yt-godot-2.jpg";
import godot3 from "../assets/images/yt-godot-3.jpg";
import godot4 from "../assets/images/yt-godot-4.jpg";
import ece1 from "../assets/images/yt-ece-1.webp";
import ece2 from "../assets/images/yt-ece-2.webp";
import music1 from "../assets/images/yt-music-1.webp";

import pixelart1 from "../assets/images/2025-pixel-art-1.png";
import gamedesign2 from "../assets/images/2025-game-design-2.png";
import multiplayer3 from "../assets/images/2025-multiplayer-3.png";
import multiplayer2 from "../assets/images/2025-multiplayer-2.png";
import multiplayer1 from "../assets/images/2025-multiplayer-1.png";
import multiplayerGodot from "../assets/images/2025-multiplayer-godot-1.png";
import swe2 from "../assets/images/2025-swe-2.png";

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
    title: "[GameStart 2025] Unity Workshop #3",
    duration: "2h 22m",
    category: "Unity",
    description: "NUSGDG teaches the basics of the Unity game engine! (Part 3)",
    link: "https://www.youtube.com/watch?v=knKDVjNoCvs",
    image: unity3,
  },
  {
    title: "[GameStart 2025] Pixel Art Workshop",
    duration: "1h 50m",
    category: "Pixel Art",
    description: "Learn how to draw pixel art with NUSGDG!",
    link: "https://www.youtube.com/watch?v=J2FkVbig_Bc",
    image: pixelart1,
  },
  {
    title: "[GameStart 2025] Unity Workshop #2 08/26/2025",
    duration: "1h 58m",
    category: "Unity",
    description:
      "NUSGDG teaches the basics of the Unity game engine! (Part 2)",
    link: "https://www.youtube.com/watch?v=bbgkGat_bIg",
    image: unity2,
  },
  {
    title: "[GameStart 2025] Game Design Workshop #2 27/8/2025",
    duration: "2h 3m",
    category: "Game Design",
    description:
      "Introduction to Game Design workshop (Part 2)! Learning about Player Agency in games.",
    link: "https://www.youtube.com/watch?v=Iho3r74qwKw",
    image: gamedesign2,
  },
  
  {
    title: "[GameStart 2025] Unity Workshop #1 8/22/2025",
    duration: "1h 43m",
    category: "Unity",
    description: "NUSGDG teaches the basics of the Unity game engine!",
    link: "https://www.youtube.com/watch?v=Mdaw64fvsvg",
    image: unity1,
  },
  {
    title: "[Level 2 Workshops][Unity] Multiplayer Games Week 3",
    duration: "1h 47m",
    category: "Unity",
    description: "Learn how to make multiplayer games with Unity! (Part 3)",
    link: "https://www.youtube.com/watch?v=HX5X3THkkh4",
    image: multiplayer3,
  },
  {
    title: "[Level 2 Workshops][Unity] Multiplayer Games Week 2",
    duration: "0h 54m",
    category: "Unity",
    description: "Learn how to make multiplayer games with Unity! (Part 2)",
    link: "https://www.youtube.com/watch?v=5LY7hztVN7U",
    image: multiplayer2,
  },
  {
    title: "[Level 2 Workshops][Godot] Multiplayer Games Week 1",
    duration: "0h 49m",
    category: "Godot",
    description: "NUSGDG teaches how to make multiplayer games with the Godot game engine!",
    link: "https://www.youtube.com/watch?v=_3cqY4eKNcY",
    image: multiplayerGodot,
  },
  {
    title: "[Level 2 Workshops][Unity] Multiplayer Games Week 1",
    duration: "1h 51m",
    category: "Unity",
    description: "Learn how to make multiplayer games with Unity! (Part 1)",
    link: "https://www.youtube.com/watch?v=eUIdIOS2zkc",
    image: multiplayer1,
  },
  {
    title: "[Level 2 Workshops][Unity] SWE in Games Week 2",
    duration: "1h 16m",
    category: "Unity",
    description: "Learn how to apply software engineering principles to game development with Unity!",
    link: "https://www.youtube.com/watch?v=PNFDx8lkGnk",
    image: swe2,
  },
];
