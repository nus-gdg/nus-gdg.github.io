import s2w4 from "../assets/images/s2w4.jpg";
import w5GameJam from "../assets/images/w5-game-jam.jpg";
import s2w6 from "../assets/images/s2w6.jpg";
import s2w7 from "../assets/images/s2w7.jpg";
import s2w8 from "../assets/images/s2w8.jpg";
import s2w9 from "../assets/images/s2w9.jpg";
import s2w10 from "../assets/images/s2w10.jpg";

export type TimeData = {
  dayOfWeek: string;
  time: string;
};

export type Venue = {
  godot: string;
  unity: string;
};

export type NoSessionReason = string;

export type WeekItem = {
  // week number can be inferred from index
  mainActivity?:
    | {
        name: string;
        updatedTime?: TimeData;
        updatedVenue?: TimeData;
      }
    | NoSessionReason;
  poster?: string;
  specialActivity?: {
    name: string;
    time: TimeData;
    venue: string;
  };
};

export type TimelineData = {
  mondayWeek1: Date;
  regularSession: {
    time: TimeData;
    venue: Venue;
  };
  weeks: WeekItem[];
};

export const TIMELINE: TimelineData = {
  mondayWeek1: new Date("2025-01-13"),
  regularSession: {
    time: {
      dayOfWeek: "Thursday",
      time: "7.30pm",
    },
    venue: {
      godot: "COM3-01-20",
      unity: "COM3-01-21",
    },
  },
  weeks: [
    {},
    {},
    {},
    {
      mainActivity: {
        name: "Game AI",
      },
      poster: s2w4,
    },
    {
      mainActivity: {
        name: "Game AI",
      },
      poster: w5GameJam,
      specialActivity: {
        name: "Week 5 Game Jam",
        time: {
          dayOfWeek: "Saturday",
          time: "10AM - 10PM",
        },
        venue: "COM3-01-21",
      },
    },
    {
      mainActivity: {
        name: "Game AI",
      },
      poster: s2w6,
    },
    {
      mainActivity: "Midterm Exams",
      poster: s2w7,
    },
    {
      mainActivity: {
        name: "Software Engineering in Games",
      },
      poster: s2w8,
    },
    {
      mainActivity: {
        name: "Software Engineering in Games",
      },
      poster: s2w9,
    },
    {
      mainActivity: {
        name: "Multiplayer",
      },
      poster: s2w10,
    },
    {
      mainActivity: {
        name: "Multiplayer",
      },
    },
    {
      mainActivity: {
        name: "Multiplayer",
      },
    },
    {
      mainActivity: "Final Exams",
    },
  ],
};
