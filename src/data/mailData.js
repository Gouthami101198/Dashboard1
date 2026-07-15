import avatar1 from "../assets/images/avatar1.PNG";
import avatar2 from "../assets/images/avatar2.PNG";
import avatar3 from "../assets/images/avatar3.PNG";
import avatar4 from "../assets/images/avatar4.PNG";
import avatar5 from "../assets/images/avatar5.PNG";
import avatar6 from "../assets/images/avatar6.PNG";
export const mailData = [
  {
    id: 1,
    sender: "Regina Cooper",
    email: "regina@gmail.com",
    subject: "Creative Director Resume",
    preview:
      "The Arts play a large role in the expression of inner thoughts and beauty in my life...",
    message: `
Hello Mark,

The Arts play a large role in the expression of inner thoughts and beauty in my life.

I have attached my latest resume and portfolio for your review. I would love the opportunity to discuss the Creative Director position.

Looking forward to hearing from you.

Regards,
Regina Cooper
    `,
    time: "10:45 AM",
    avatar: avatar1,
    unread: true,
    starred: true,
    hasAttachment: true,
    attachments: [
      {
        id: 1,
        name: "Resume.pdf",
        size: "2.3 MB",
        type: "PDF",
      },
      {
        id: 2,
        name: "Portfolio.zip",
        size: "18.5 MB",
        type: "ZIP",
      },
    ],
  },

  {
    id: 2,
    sender: "Dustin Williamson",
    email: "dustin@gmail.com",
    subject: "Meeting with Friends",
    preview:
      "Hello Mark! I am writing to introduce you to David Boyd...",
    message:
      "Let's meet tomorrow at 10:00 AM to discuss the new project.",
    time: "10:30 AM",
    avatar: avatar2,
    unread: false,
    starred: false,
    hasAttachment: false,
    attachments: [],
  },

  {
    id: 3,
    sender: "Jane Wilson",
    email: "jane@gmail.com",
    subject: "UX Conference",
    preview:
      "We use the Arts as a means of touching that part of us...",
    message:
      "The conference starts next Monday. Please confirm your attendance.",
    time: "09:40 AM",
    avatar: avatar3,
    unread: false,
    starred: true,
    hasAttachment: true,
    attachments: [
      {
        id: 1,
        name: "Conference.pdf",
        size: "1.5 MB",
        type: "PDF",
      },
    ],
  },

  {
    id: 4,
    sender: "Brandon Pena",
    email: "brandon@gmail.com",
    subject: "Muzli Weekly Design",
    preview:
      "The Arts allow us to be as specific or abstract as we please...",
    message:
      "Here is this week's design inspiration newsletter.",
    time: "09:10 AM",
    avatar: avatar4,
    unread: false,
    starred: false,
    hasAttachment: false,
    attachments: [],
  },

  {
    id: 5,
    sender: "Jacob Hawkins",
    email: "jacob@gmail.com",
    subject: "Weekly Report",
    preview:
      "From dance and music to abstract art our concept of life...",
    message:
      "Please find the weekly performance report attached.",
    time: "08:45 AM",
    avatar: avatar5,
    unread: true,
    starred: false,
    hasAttachment: true,
    attachments: [
      {
        id: 1,
        name: "Report.xlsx",
        size: "4.2 MB",
        type: "Excel",
      },
    ],
  },

  {
    id: 6,
    sender: "Shane Black",
    email: "shane@gmail.com",
    subject: "Order Status #24197118",
    preview:
      "The Arts teach us how to communicate through creative expression...",
    message:
      "Your order has been shipped successfully.",
    time: "08:15 AM",
    avatar: avatar6,
    unread: false,
    starred: false,
    hasAttachment: false,
    attachments: [],
  },
];