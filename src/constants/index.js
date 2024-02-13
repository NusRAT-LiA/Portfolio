import {
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  figma,
  deftax,
  solidity,
  eth,
  bitcoin,
  unity,
  nextjs,
  mysql,
  oracle,
  python,
  java,
  csharp,
  blockchained,
  edu,
  accac,
  shikho,
  wfh,
  woow,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];



const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Csharp",
    icon: csharp,
  },

  {
    name: "solidity",
    icon: solidity,
  },
  
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "eth",
    icon: eth,
  },
  {
    name: "bitcoin",
    icon: bitcoin,
  },
  {
    name: "unity",
    icon: unity,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "oracle",
    icon: oracle,
  },
  {
    name: "python",
    icon: python,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "figma",
    icon: figma,
  },

  {
    name: "java",
    icon: java,
  },

];

const experiences = [
  {
    title: "Co.Publishing Secretary",
    company_name: "Adamjee Cantonment College Art Club",
    icon: accac,
    iconBg: "#383E56",
    date: "July 2019 - April 2020",
    points: [
     " As a Co-Publishing Secretary, I was responsible for efficiently coordinating and organizing publishing activities, ensuring smooth communication between authors and publishers, and managing essential administrative tasks to facilitate the publication process. My role involves meticulous attention to detail, effective time management, and fostering collaborative relationships within the publishing team"
    ],
  },
  {
    title: "Social Media Assistant",
    company_name: "Shikho",
    icon: shikho,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Oct 2021",
    points: [
      "As a Social Media Assistant , I was responsible for managing contents and student queries in social media platform, Facebook.I collaborated with the knowledge team to monitor and respond to comments and messages, and tracked metrics to measure the effectiveness of our efforts while increasing our online presence and connect with learners.",
    ],
  },
  {
    title: "Academic content Developer & Instructor",
    company_name: "EduHive",
    icon: edu,
    iconBg: "#383E56",
    date: "Feb 2022 - Mar 2023",
    points: [
      " I was responsible for creating engaging and informative educational materials and delivering them to learners . Leveraging my expertise in instructional design and subject matter knowledge, I collaborated with a team of professionals to develop and curate effective online courses that met the needs of diverse audiences. I was also dedicated to providing excellent support and guidance to learners, facilitating discussions and activities that promoted active learning and critical thinking.",
    ],
  },
  {
    title: "Event Management Executive",
    company_name: "Work for Orientation & Organizing the World - WOOW",
    icon: woow,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Present",
    points: [
      "As an event management professional, I am responsible for planning, organizing and contribute in executing successful events .I work closely with clients to understand their goals and requirements, develop event strategies and timelines, manage budgets and logistics, coordinate with vendors and suppliers, and ensure seamless execution of events. This role represents my attempt to help my community .",
    ],
  },
  {
    title: "Volunteer",
    company_name: "WFH Foundation",
    icon: wfh,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "As an event management professional, I am responsible for planning, organizing and contribute in executing successful events .I work closely with clients to understand their goals and requirements, develop event strategies and timelines, manage budgets and logistics, coordinate with vendors and suppliers, and ensure seamless execution of events. This role represents my attempt to help my community .",
    ],
  },
];



const projects = [
  {
    name: "DefTax",
    description:
      "A hybrid Blockchain-based Government-to-Corporation integrated transaction tracking e-governance system with fine-grained access control that facilitates secure and accurate tax collection.",
    tags: [
      {
        name: "Hyperledger",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: deftax,
    source_code_link: "https://drive.google.com/file/d/1PhNU3utxijum4Y-jiqaqnub8h_7hJ8M9/view",
  },
  {
    name: "BlockChainED",
    description:
      "This project teaches the core principles and algorithms of blockchain through a real-time blockchain including public key cryptography , hashing , transactions , block creation , proof-of-work implementation",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "green-text-gradient",
      },
   
    ],
    image: blockchained,
    source_code_link: "https://github.com/NusRAT-LiA/Blockchain_in_Cpp",
  },

];

export {technologies, experiences, projects };
