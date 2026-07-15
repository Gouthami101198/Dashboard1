// =========================
// Avatars
// =========================

import avatar1 from "../assets/images/avatar1.PNG";
import avatar2 from "../assets/images/avatar2.PNG";
import avatar3 from "../assets/images/avatar3.PNG";
import avatar4 from "../assets/images/avatar4.PNG";
import avatar5 from "../assets/images/avatar5.PNG";
import avatar6 from "../assets/images/avatar6.PNG";
// =========================
// Photos
// =========================

import photo1 from "../assets/photos/photo1.png";
import photo2 from "../assets/photos/photo2.png";
import photo3 from "../assets/photos/photo3.png";
import photo4 from "../assets/photos/photo4.png";
import photo5 from "../assets/photos/photo5.png";
import photo6 from "../assets/photos/photo6.png";

// =========================
// Posts
// =========================

import post1 from "../assets/posts/post1.png";
import post2 from "../assets/posts/post2.png";
import videoThumbnail from "../assets/posts/video-thumbnail.png";

// =====================================
// Profile Information
// =====================================

export const profileInfo = {
  name: "Ronald Robertson",
  role: "Creative Director",
  email: "robe@example.com",
  phone: "+1 (070) 123-8459",
  birthday: "17 March 1995",
  location: "New York, USA",
};

// =====================================
// Friends
// =====================================

export const friendsData = [
  {
    id: 1,
    name: "Regina Cooper",
    role: "UI Designer",
    avatar: avatar2,
  },
  {
    id: 2,
    name: "Judith Black",
    role: "Product Designer",
    avatar: avatar3,
  },
  {
    id: 3,
    name: "Nathan Fox",
    role: "Developer",
    avatar: avatar4,
  },
  {
    id: 4,
    name: "Dustin Williamson",
    role: "Project Manager",
    avatar: avatar5,
  },
  {
    id: 5,
    name: "Courtney Henry",
    role: "UX Designer",
    avatar: avatar6,
  },
  {
    id: 6,
    name: "Cody Fisher",
    role: "Frontend Developer",
    avatar: avatar1,
  },
];

// =====================================
// Photos
// =====================================

export const photosData = [
  {
    id: 1,
    title: "Vacation",
    image: photo1,
  },
  {
    id: 2,
    title: "Workspace",
    image: photo2,
  },
  {
    id: 3,
    title: "Friends",
    image: photo3,
  },
  {
    id: 4,
    title: "Mountains",
    image: photo4,
  },
  {
    id: 5,
    title: "Sunset",
    image: photo5,
  },
  {
    id: 6,
    title: "Travel",
    image: photo6,
  },
];

// =====================================
// Feed Posts
// =====================================

export const postsData = [
  {
    id: 1,
    user: "Ronald Robertson",
    avatar: avatar1,
    role: "Creative Director",
    time: "2 hours ago",
    caption:
      "Working on our new dashboard UI today. Looking forward to hearing your feedback!",

    image: post1,

    likes: 256,
    comments: 48,
    shares: 19,
  },

  {
    id: 2,
    user: "Regina Cooper",
    avatar: avatar2,
    role: "UI Designer",
    time: "Yesterday",

    caption:
      "Just finished the latest landing page design. Hope you like the modern layout and colors.",

    image: post2,

    likes: 198,
    comments: 35,
    shares: 14,
  },
];

// =====================================
// Video Post
// =====================================

export const videoPost = {
  id: 3,
  user: "Ronald Robertson",
  avatar: avatar1,
  role: "Creative Director",
  time: "3 hours ago",

  caption:
    "Here's a short walkthrough of our latest dashboard prototype.",

  thumbnail: videoThumbnail,

  likes: 542,
  comments: 87,
  shares: 23,
};

// =====================================
// Comments
// =====================================

export const commentsData = [
  {
    id: 1,
    user: "Regina Cooper",
    avatar: avatar2,
    time: "10 min ago",
    text: "Amazing work! The dashboard looks clean and professional.",
  },
  {
    id: 2,
    user: "Judith Black",
    avatar: avatar3,
    time: "25 min ago",
    text: "I really like the typography and spacing.",
  },
  {
    id: 3,
    user: "Nathan Fox",
    avatar: avatar4,
    time: "1 hour ago",
    text: "Great design! Looking forward to the final version.",
  },
];