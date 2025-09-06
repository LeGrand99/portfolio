import ecommerce from "../assets/project_img/ecommerce.png";
//import Pf from "../assets/project_img/portfolio.png";
import appfi2 from "../assets/project_img/s5.png";
import chat from "../assets/project_img/chat5.png";
import Esc from "../assets/project_img/esc2.png";
import type { project } from "../types/projectTypes";

//  {
//   id:5,
//   image:Pf,
//   name: "Portfolio",
//   description: "",
//   linkDemo:"http://ecommerce-montre.vercel.app",
//   tech: [{ name: "ReactTS" }, { name: "Tailwind CSS" }],
//   category: "Web"
// },

export const projectsFR: project[] = [
  {
    id: 1,
    image: ecommerce,
    name: "Site e-commerce de vente de montre",
    description:
      "Site web permettant aux utilisateurs de découvrir une collection de montres, consulter les fiches produits et ajouter des articles à un panier.",
    linkDemo: "https://e-commerce-montre-wz9a.vercel.app/",
    tech: [{ name: "ReactJS" }, { name: "Redux" }, { name: "Tailwind CSS" }],
    category: "Web",
  },
  {
    id: 2,
    image: chat,
    name: "RealTime Chat App",
    description:
      "Application mobile permettant aux utilisateurs d’échanger des messages instantanés. Un système d’authentification sécurise l’accès et garantit la confidentialité des échanges.",
    code: "https://github.com/Soaviniavo/Chat.git",
    tech: [{ name: "React Native" }, { name: "Expo" }, { name: "Firebase" }],
    category: "Mobile",
  },
  {
    id: 3,
    image: appfi2,
    name: "Application mobile de gestion financière personelle",
    description:
      "Application mobile permettant aux utilisateurs de suivre leurs dépenses, catégoriser leurs transactions et visualiser leur budget à travers des graphiques simples et intuitifs.",
    code: "https://github.com/Soaviniavo/app-fi.git",
    tech: [{ name: "React Native" }, { name: "Expo" }, { name: "sqlite" }],
    category: "Mobile",
  },
  {
    id: 4,
    image: Esc,
    name: "Système Web de Visualisation et Filtrage de Flux Financiers",
    description:
      "Cette application web permet d’importer et d’analyser des fichiers CSV contenant des flux monétaires. Données automatiquement traitées, affichées via une interface claire, avec authentification et gestion des utilisateurs intégrées.",
    code: "https://github.com/Soaviniavo/ESC.git",
    tech: [
      { name: "Angular" },
      { name: "Bootstrap" },
      { name: "Node js" },
      { name: "Express js" },
      { name: "MySQL" },
    ],
    category: "Web",
  },
];

export const projectsEN: project[] = [
  {
    id: 1,
    image: ecommerce,
    name: "E-commerce Watch Sales Website",
    description:
      "Website allowing users to browse a watch collection, view product pages, and add items to a shopping cart.",
    linkDemo: "http://ecommerce-montre.vercel.app",
    tech: [{ name: "ReactJS" }, { name: "Redux" }, { name: "Tailwind CSS" }],
    category: "Web",
  },
  {
    id: 2,
    image: chat,
    name: "Real-Time Chat App",
    description:
      "Mobile application allowing users to exchange instant messages. A secure authentication system protects access and ensures the confidentiality of conversations.",
    code: "https://github.com/Soaviniavo/Chat.git",
    tech: [{ name: "React Native" }, { name: "Expo" }, { name: "Firebase" }],
    category: "Mobile",
  },
  {
    id: 3,
    image: appfi2,
    name: "Personal Financial Management Mobile App",
    description:
      "Mobile application enabling users to track expenses, categorize transactions, and visualize their budget through simple and intuitive charts.",
    code: "https://github.com/Soaviniavo/app-fi.git",
    tech: [{ name: "React Native" }, { name: "Expo" }, { name: "sqlite" }],
    category: "Mobile",
  },
  {
    id: 4,
    image: Esc,
    name: "Web System for Visualization and Filtering of Financial Flows",
    description:
      "This web application allows importing and analyzing CSV files containing monetary transactions. Data is automatically processed, displayed through a clear interface, with integrated authentication and user management.",
    code: "https://github.com/Soaviniavo/ESC.git",
    tech: [
      { name: "Angular" },
      { name: "Bootstrap" },
      { name: "Node js" },
      { name: "Express js" },
      { name: "MySQL" },
    ],
    category: "Web",
  },
];
