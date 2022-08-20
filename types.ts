import { IconName } from "@fortawesome/free-brands-svg-icons";

export enum LANGUAGE_LEVEL {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = "B2",
  C1 = "C1",
  C2 = "C2",
  Fluent = "Fluent"
}

export enum SKILLS {
  TYPESCRIPT = "Typescript",
  JAVASCRIPT = "Javascript",
  HTML = "HTML",
  CSS = "CSS",
  SASS = "Sass",
  LESS = "Less",
  WEBPACK = "Webpack",
  REACT = "React",
  PUG = "PugJS",
  ANGULAR = "Angular",
  REST_API = "REST API",
  GRAPH_QL = "GraphQL",
  GATSBY = "Gatsby",
  NEXT_JS = "NextJS",
  NETLIFY = "Netlify",
  VERCEL = "Vercel",
  STYLED_COMPONENTS = "Styled Components",
  STRAPI = "Strapi CMS",
  NODE = "NodeJS",
  GITHUB = "Github",
  GITLAB = "Gitlab",
  TAILWIND = "Tailwind",
  REDUX = "Redux",
  ZUSTAND = "Zustand",
  RTL = "React Testing Library",
  JEST = "Jest",
  ENZYME = "Enzyme",
  CANVAS = "HTML5 Canvas",
  OOUX = "Object Oriented User Experience",
  UX = "User Experience",
  USABILITY_TEST = "Usability Testing",
  SHEETS = "Spreadsheets",
  UI = "User Interface Design",
  IA = "Information Architecture",
  ADOBE_ILLUSTRATOR = "Adobe Illustrator",
  DESIGN_THINKING = "Design Thinking",
  WEB_COMPONENTS = "Web Components",
  DATA_VISUALIZATION = "Data Visualization"
}

export type TDeltaTime = {
  from: Date;
  to: Date | null;
}

type TGrade = {
  value: number;
  total: number;
}

type TPresentation = {
  event: string;
  title: string;
}

export type TSectionItem = {
  title: string;
  subtitle: string;
  dates: Date | TDeltaTime,
  description: string;
  skills?: Set<SKILLS>;
  grade?: TGrade;
  presentations?: TPresentation[];
  extracurricular?: string[];
}

export type TJob = {
  title: string;
  company: string;
  dates: Date | TDeltaTime,
  description: string;
  skills?: Set<SKILLS>
  presentations?: TPresentation[];
  extracurricular?: string[];
}

export type TEducation = {
  institution: {
    fullName: string,
    acronym: string | null,
  },
  degreeLevel: string,
  course: string,
  dates: TDeltaTime,
  grade: {
    value: number,
    total: number
  },
  description: string,
  extracurricular: string[]
}

export type SocialNetwork = {
  icon: IconName,
  url: string
}

export type Info = {
  name: string;
  title: string;
  nationality: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  social: Record<string, SocialNetwork>[];
}

