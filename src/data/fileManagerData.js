// Folder Icons
import folderBlue from "../assets/folders/folder-blue.PNG";
import folderYellow from "../assets/folders/folder-yellow.PNG";
import folderGreen from "../assets/folders/folder-green.PNG";
import folderRed from "../assets/folders/folder-red.PNG";

// File Icons
import pdfIcon from "../assets/pdf.png";
import docIcon from "../assets/doc.PNG";
import imageIcon from "../assets/image.PNG";
import zipIcon from "../assets/zip.png";

// =========================
// Folder Tree
// =========================

export const folderTreeData = [
  {
    id: 1,
    name: "Design",
    children: [],
  },
  {
    id: 2,
    name: "Projects",
    open: true,
    children: [
      {
        id: 21,
        name: "Projects_01",
      },
      {
        id: 22,
        name: "Projects_02",
      },
      {
        id: 23,
        name: "Projects_03",
      },
      {
        id: 24,
        name: "Projects_04",
      },
    ],
  },
  {
    id: 3,
    name: "Music",
    children: [],
  },
  {
    id: 4,
    name: "Pictures",
    children: [],
  },
  {
    id: 5,
    name: "Documents",
    children: [],
  },
  {
    id: 6,
    name: "Downloads",
    children: [],
  },
];

// =========================
// Folder Grid
// =========================

export const folderGridData = [
  {
    id: 1,
    name: "Projects",
    files: 25,
    size: "1.2 GB",
    icon: folderBlue,
    color: "#EAF5FF",
  },
  {
    id: 2,
    name: "Design",
    files: 18,
    size: "850 MB",
    icon: folderYellow,
    color: "#FFF8DD",
  },
  {
    id: 3,
    name: "Documents",
    files: 42,
    size: "2.8 GB",
    icon: folderGreen,
    color: "#EAFCEC",
  },
  {
    id: 4,
    name: "Downloads",
    files: 12,
    size: "540 MB",
    icon: folderRed,
    color: "#FFEAEA",
  },
];

// =========================
// Recent Files
// =========================

export const filesData = [
  {
    id: 1,
    name: "Project Proposal.pdf",
    type: "PDF",
    size: "2.4 MB",
    modified: "Today",
    icon: pdfIcon,
  },
  {
    id: 2,
    name: "Company Report.docx",
    type: "DOCX",
    size: "1.3 MB",
    modified: "Yesterday",
    icon: docIcon,
  },
  {
    id: 3,
    name: "Dashboard UI.png",
    type: "PNG",
    size: "5.8 MB",
    modified: "2 Days Ago",
    icon: imageIcon,
  },
  {
    id: 4,
    name: "Design Assets.zip",
    type: "ZIP",
    size: "18.9 MB",
    modified: "Last Week",
    icon: zipIcon,
  },
];

// =========================
// Storage
// =========================

export const storageData = {
  used: 70,
  total: "100 GB",
  available: "30 GB",
};
