import logo1 from "../assets/logos/dropbox.png";
import logo2 from "../assets/logos/slack.png";
import logo3 from "../assets/logos/spotify.png";
import logo4 from "../assets/logos/figma.png";
import logo5 from "../assets/logos/github.png";
import logo6 from "../assets/logos/notion.png";

import avatar1 from "../assets/images/avatar1.PNG";
import avatar2 from "../assets/images/avatar2.PNG";
import avatar3 from "../assets/images/avatar3.PNG";
import avatar4 from "../assets/images/avatar4.PNG";
import avatar5 from "../assets/images/avatar5.PNG";
import avatar6 from "../assets/images/avatar6.PNG";

export const projectsData = [
  {
    id: 1,
    logo: logo1,
    title: "App Development",
    company: "Dropbox Inc.",
    description:
      "Create a mobile application for Android and iOS with a modern user interface.",
    progress: 75,
    status: "Started",
    timeLeft: "1 Week Left",
    members: [avatar1, avatar2, avatar3],
  },
  {
    id: 2,
    logo: logo2,
    title: "CRM Dashboard",
    company: "Slack",
    description:
      "Develop an admin dashboard with analytics, reports and customer management.",
    progress: 60,
    status: "Started",
    timeLeft: "2 Weeks Left",
    members: [avatar2, avatar3, avatar4],
  },
  {
    id: 3,
    logo: logo3,
    title: "Music Platform",
    company: "Spotify",
    description:
      "Design and develop a responsive music streaming web application.",
    progress: 95,
    status: "Completed",
    timeLeft: "Completed",
    members: [avatar3, avatar4, avatar5],
  },
  {
    id: 4,
    logo: logo4,
    title: "UI/UX Design",
    company: "Figma",
    description:
      "Design a complete UI kit and prototype for a finance application.",
    progress: 45,
    status: "On Hold",
    timeLeft: "3 Weeks Left",
    members: [avatar1, avatar5, avatar6],
  },
  {
    id: 5,
    logo: logo5,
    title: "Git Repository",
    company: "GitHub",
    description:
      "Create project repositories and maintain version control workflow.",
    progress: 80,
    status: "Started",
    timeLeft: "5 Days Left",
    members: [avatar2, avatar4, avatar6],
  },
  {
    id: 6,
    logo: logo6,
    title: "Workspace",
    company: "Notion",
    description:
      "Build documentation, task tracking and team collaboration workspace.",
    progress: 100,
    status: "Completed",
    timeLeft: "Completed",
    members: [avatar1, avatar2, avatar3, avatar4],
  },
];