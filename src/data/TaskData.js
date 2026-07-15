// Image Imports
import landscape1 from "../assets/images/landscape1.png";
import landscape2 from "../assets/images/landscape2.png";
import desert from "../assets/images/desert.png";

import avatar1 from "../assets/images/avatar1.PNG";
import avatar2 from "../assets/images/avatar2.PNG";
import avatar3 from "../assets/images/avatar3.PNG";

export const todoTasks = [
  {
    id: 1,
    title: "Brand Logo Design",
    description: "Make a redesign of the logo in corporate colors.",
    date: "Jun 17",
    attachments: 2,
    comments: 5,
    image: null,
    progress: 0,
    avatars: [avatar1, avatar2],
  },
  {
    id: 2,
    title: "New Header Image",
    description: "",
    date: "Jun 17",
    attachments: 1,
    comments: 3,
    image: landscape1,
    progress: 0,
    avatars: [avatar3],
  },
  {
    id: 3,
    title: "Wireframe for App",
    description: "Make wireframe for an app presentation.",
    date: "Jun 17",
    attachments: 0,
    comments: 1,
    image: null,
    progress: 0,
    avatars: [avatar1, avatar2],
  },
];

export const progressTasks = [
  {
    id: 4,
    title: "Updating Modules",
    description: "Step-by-step update of modules.",
    date: "Jun 17",
    attachments: 2,
    comments: 5,
    progress: 50,
    image: null,
    checklist: [],
    avatars: [avatar1, avatar2],
  },
  {
    id: 5,
    title: "Template Progress",
    description: "Designing cool UI design templates.",
    date: "Jun 17",
    attachments: 2,
    comments: 5,
    progress: 75,
    image: null,
    checklist: [
      {
        id: 1,
        text: "Inbox Template",
        completed: true,
      },
      {
        id: 2,
        text: "Chat Template",
        completed: true,
      },
      {
        id: 3,
        text: "Tasks Template",
        completed: true,
      },
      {
        id: 4,
        text: "Projects Template",
        completed: false,
      },
    ],
    avatars: [avatar2, avatar3],
  },
];

export const completedTasks = [
  {
    id: 6,
    title: "Refresh Photo Slider",
    description: "",
    date: "Jun 17",
    attachments: 3,
    comments: 2,
    progress: 100,
    images: [desert, landscape2, landscape1],
    avatars: [avatar1, avatar2],
  },
  {
    id: 7,
    title: "Server Startup",
    description: "Running the server in test mode and configuring.",
    date: "Jun 17",
    attachments: 0,
    comments: 17,
    progress: 100,
    image: null,
    avatars: [avatar1, avatar3],
  },
  {
    id: 8,
    title: "New Background",
    description: "",
    date: "Jun 17",
    attachments: 1,
    comments: 2,
    progress: 100,
    image: landscape2,
    avatars: [avatar2],
  },
];