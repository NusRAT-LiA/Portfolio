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
      "Efficiently coordinated and organized publishing activities as a Co-Publishing Secretary.",
      "Established communication between authors and publishers, managing essential administrative tasks to facilitate the publication process.",
      "Performed administrative roles in executing more than 10 intra-college-fests and collaborating in more than 5 inter-college-fests.",
    ],
  
  },
  {
    title: "Social Media Assistant",
    company_name: "Shikho",
    icon: shikho,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Oct 2021",
    points: [
      "Responsible for managing content and student queries on the Facebook social media platform.",
      "Collaborated with the knowledge team to monitor and respond to comments and messages in 100% of the live classes.",
      "Tracked metrics to measure the effectiveness of our efforts.",
    ],
  },
  {
    title: "Academic content Developer & Instructor",
    company_name: "EduHive",
    icon: edu,
    iconBg: "#383E56",
    date: "Feb 2022 - Mar 2023",
    points: [
      "Responsible for creating engaging and informative educational materials.",
      "Collaborated with a team of professionals to develop and curate effective online courses.",
      "Contributed to 40% of their HSC chemistry contents.",
      "Provided support and guidance to learners from remote rural areas, in free live classes.",
      "Facilitated discussions and activities that promoted active learning and critical thinking.",
    ],
  },
  {
    title: "Event Management Executive",
    company_name: "Work for Orientation & Organizing the World - WOOW",
    icon: woow,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Present",
    points: [
    "As an event management professional, I am responsible for planning, organizing, and contributing to the execution of successful events.",
    "I work closely with clients to understand their goals and requirements.",
    "I develop event strategies and timelines.",
    "I manage budgets and logistics.",
    "I ensure the seamless execution of events.",
    "Under my leadership at WOOW, we executed a hygiene campaign named 'Hygieia'.",
    "This campaign provided medical equipment and hygiene supplies to needy families in Dhaka.",
    ],
  },
  {
    title: "Volunteer",
    company_name: "WFH Foundation",
    icon: wfh,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "Assisting in organizing and participating in community outreach programs.",
+     "Collaborating with team members to develop and implement projects aimed at addressing social issues.",
+     "Volunteering time and expertise to assist with administrative tasks and organizational operations.",
      "Participating in awareness campaigns and educational initiatives to promote social change.",
      "Engaging in networking and partnership-building activities to expand the NGO's reach and impact.",
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
