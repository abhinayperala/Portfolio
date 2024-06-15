import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  infuzex,
  iiitm,
  carrent,
  jobit,
  tripguide,
  threejs,
  social,
  blog,
  blotout,
  outshade,
  sentiment,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  {
    id: 'https://drive.google.com/file/d/1zWOZ_IBl0s6arm4_iomZ2AlwRujL3ZR0/view',
    title: 'Resume',
  },
];

const services = [
  {
    title: 'Machine Learning Enthusiast',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Mobile App Developer',
    icon: mobile,
  },
  {
    title: 'Competitive Programmer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Flutter Developer Intern',
    company_name: 'Healtether',
    icon: blotout,
    iconBg: '#E6DEDD',
    date: 'Nov 2023 - Jan 2024',
    points: [
      "Designed, implemented, and tested mobile applications, increasing user engagement by 15 percent",
      "Implemented Backend functionality for mobile apps using Flask and integrated them with firebase for storage",
      
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: 'Python Teaching Assistant',
    company_name: 'Keshav Memorial Institute Of Technology',
    icon:outshade,
    iconBg: '#383E56',
    date: 'Mar 2022 -May 2022',
    points: [
      "Guided and coached a cohort of 30 students from Los Angeles in Python Programming at Keshav Memorial Institute Of Technology.",
      "Actively lead a group of 30 students, enhancing their programming skills and achieving a 76 percent satisfaction rate in post-course surveys.",
    ],
  },
];

const projects = [
  {
    name: 'Brain Tumor Segmentation',
    description:
      'Created a deep learning model using U-NET Convolutional Network, achieving 82 percent accuracy in tumor segmentation. Utilized Flutter for the frontend, Flask for the backend, Firebase for storage, and AWS for hosting.',
    tags: [
      {
        name: 'Deep Learning',
        color: 'blue-text-gradient',
      },
      {
        name: 'Flask',
        color: 'green-text-gradient',
      },
      {
        name: 'Flutter',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/KarthikSharma-7/cli-app/tree/sahithi',
  },
  {
    name: 'Analyz Chatbot',
    description: 'Created a chatbot using Mistral 7B LLM and OPENAI API that assists users in learning Data Structures and Algorithms. Utilized Streamlit-Ace to facilitate code conversion between 60 programming languages. Implemented Retrieval Augmented Generation(RAG) using LangChain and FAISS Vector Base',
    tags: [
      {
        name: 'LLM',
        color: 'blue-text-gradient',
      },
      {
        name: 'Streamlit',
        color: 'green-text-gradient',
      },
      {
        name: 'OPENAI',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/KarthikSharma-7',
  },
  {
    name: 'Finex',
    description:
      'Developed a website for robust financial management by  Leveraging MongoDB, Express.js, React, and Node.js to create a user-friendly dashboard with insightful graph views, providing users with an intuitive overview of income, expenses, total balance, and financial trends',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node',
        color: 'green-text-gradient',
      },
      {
        name: 'Express',
        color: 'pink-text-gradient',
      },
    ],
    image: blog,
    source_code_link: 'https://github.com/chsahithi3812/GeekBot',
  },
  {
    name: 'Stock Market Prediction',
    description:
      'Crafted a Streamlit website using Yahoo Finance, Streamlit, and LSTM model for innovative stock price prediction. Empowered investors with user-friendly access to historical data and dynamic technical analysis featuring indicators like 100MA and 200MA',
    tags: [
      {
        name: 'Streamlit',
        color: 'blue-text-gradient',
      },
      {
        name: 'LSTM',
        color: 'green-text-gradient',
      }
     
    ],
    image: sentiment,
    source_code_link: 'https://github.com/chsahithi3812/Sentimental-Analysis',
  },
  {
    name: 'E-Commerce Website',
    description:
      'Developed an E-Commerce Website by creating a dynamic and responsive user interface using React. Employed Redux to manage application state, Additionally implemnted robust server using Node.js and Express.Integrated MongoDB for efficient data storage and retrieval.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Redux',
        color: 'green-text-gradient',
      },
      {
        name: 'Express',
        color: 'pink-text-gradient',
      },
     
    ],
    image: iiitm,
    source_code_link: 'https://github.com/chsahithi3812/Sentimental-Analysis',
  },
  {
    name: 'Inhouse LLM',
    description:
      'Developed an offline AI/ML tool for research and development organisations. It uses open-source LLM models such as BERT,BART and Falcon 7B for text summarization, Science and Technology document summarization, news summarization and grammar check.',
    tags: [
      {
        name: 'BART',
        color: 'blue-text-gradient',
      },
      {
        name: 'GenAI',
        color: 'green-text-gradient',
      },
      {
        name: 'LLM',
        color: 'pink-text-gradient',
      },
     
    ],
    image: infuzex,
    source_code_link: 'https://github.com/chsahithi3812/Sentimental-Analysis',
  },
];

export { services, technologies, experiences, projects };
