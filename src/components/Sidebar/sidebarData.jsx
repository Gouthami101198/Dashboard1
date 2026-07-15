import {
  FaTachometerAlt,
  FaTasks,
  FaShoppingCart,
  FaCalendarAlt,
  FaEnvelope,
  FaComments,
  FaProjectDiagram,
  FaFolderOpen,
  FaStickyNote,
  FaAddressBook,
  FaChevronRight,
} from "react-icons/fa";

export const sidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <FaTachometerAlt />,
  },
  {
    title: "Task",
    path: "/task",
    icon: <FaTasks />,
  },
  {
    title: "E-Commerce",
    path: "/ecommerce",
    icon: <FaShoppingCart />,
    arrow: <FaChevronRight />,
  },
  
  {
    title: "Calendar",
    path: "/calendar",
    icon: <FaCalendarAlt />,
  },
  {
    title: "Mail",
    path: "/mail",
    icon: <FaEnvelope />,
    badge: 8,
  },
  {
    title: "Chat",
    path: "/chat",
    icon: <FaComments />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <FaProjectDiagram />,
  },
  {
    title: "File Manager",
    path: "/filemanager",
    icon: <FaFolderOpen />,
  },
  {
    title: "social",
    path: "/social",
    icon: <FaStickyNote />,
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: <FaAddressBook />,
  },
];