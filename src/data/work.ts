import { SKILLS, TJob } from "~/types";

const demodern: TJob = {
  title: "Full Stack Developer",
  company: "[Demodern Gmbh](https://demodern.com/)",
  dates: {
    from: new Date("01 July 2021"),
    to: null
  },
  description: `Supporting Demodern in adapting its business model to the web industry. Leading a development team into building a corporate metaverse experience, supporting the design team with some deliverables and overseeing conversations with stakeholders. In the meantime I advocate for good web development practices, accessibility and project workflow through internal presentations for the team.`,
  skills: new Set([
    SKILLS.TYPESCRIPT, SKILLS.JAVASCRIPT, SKILLS.HTML, SKILLS.CSS, SKILLS.STYLED_COMPONENTS, SKILLS.REACT, SKILLS.REST_API, SKILLS.NEXT_JS, SKILLS.STRAPI, SKILLS.NODE, SKILLS.ZUSTAND, SKILLS.GITLAB
  ]),
  presentations: [
    "React, the good bits", "Git basics"
  ],
}

const workAndCo: TJob = {
  title: "Developer",
  company: "[Work&Co](https://work.co/)",
  dates: {
    from: new Date("01 July 2019"),
    to: new Date("01 June 2021"),
  },
  description: `Worked on big and small projects for the telecommunication, retail and insurance industries with feature development, collaborating with peers, GDPR vulnerability assessments and accessibility audits. Lead the tech team on a 10 days pro-bono project, Neighbour Share. As a part of the Accessibility Advocate initiative, I helped colleagues from other projects to solve their challenges. Took the stage for several knowledge shares for the tech team and, as well as for my own Game Show for the Brazilian Offices.`,
  skills: new Set([
    SKILLS.TYPESCRIPT, SKILLS.JAVASCRIPT, SKILLS.HTML, SKILLS.CSS, SKILLS.SASS, SKILLS.STYLED_COMPONENTS, SKILLS.TAILWIND, SKILLS.REACT, SKILLS.REST_API, SKILLS.NEXT_JS, SKILLS.STRAPI, SKILLS.NODE, SKILLS.REDUX, SKILLS.GATSBY, SKILLS.ANGULAR, SKILLS.GRAPH_QL, SKILLS.RTL, SKILLS.RTL, SKILLS.ENZYME, SKILLS.JEST, SKILLS.GITHUB, SKILLS.GITLAB
  ]),
  presentations: [
    "Gatbsy", "Flutter", "Watson Assistance"
  ],
  extracurricular: [
    "Accessibility Advocate",
    "Privacy initiative"
  ]
}

const globoEsporte: TJob = {
  title: "Developer",
  company: "[Globo Esporte](https://ge.globo.com/)",
  dates: {
    from: new Date("01 February 2018"),
    to: new Date("01 June 2019"),
  },
  description: `Lead a team of four other developers and one designer, in several time-sensitive projects as well as in building our own publishing platform. In partnership with the award-winning infographics team, I developed editorial and sponsored SPAs that entertain and inform users. I also led the redesign of the "GCN", an internal publishing tool that manages the workflow of the newsroom, from ideation until usability tests.I was also responsible for recruitment, both for developers and interns.`,
  skills: new Set([
    SKILLS.JAVASCRIPT, SKILLS.HTML, SKILLS.CSS, SKILLS.SASS, SKILLS.REACT, SKILLS.REST_API, SKILLS.GRAPH_QL, SKILLS.WEBPACK, SKILLS.CANVAS
  ])
}

const comidaDaGente: TJob = {
  title: "Product Designer / Business Analyst",
  company: "Comida da Gente",
  dates: {
    from: new Date("01 Jan 2015"),
    to: new Date("01 June 2017")
  },
  description: `“Comida da Gente” was born as a shared economy initiative, social networks based, in which friends and acquaintances would get together to buy large quantities of organic products directly from small producers.
Having been part of my Undergratuate thesis of Design, I was responsible for all phases of design, such as initial research with users, competition assessment, information architecture, interface design and usability testing. I've had the opportunity to speak in conferences about this project, such as the Information Architecture Day 2017, The Developers Conference 2017 and Interaction South America 2017, as well as participated in panel discussions at smaller events.
By the end of 2015, I also became part of the company's operations team, being responsible for captivating the community inside and outside social networks. During my time at the company, the number of members grew from 6k to 44k. I participated in the organization of hundreds of collective purchases, created spreadsheet templates for operations, as well as scripts for automating work. I made business with over 20 producers, for whom I managed the interactions within the group.`,
  skills: new Set([SKILLS.OOUX, SKILLS.UX, SKILLS.USABILITY_TEST, SKILLS.SHEETS, SKILLS.UI, SKILLS.IA, SKILLS.ADOBE_ILLUSTRATOR, SKILLS.DESIGN_THINKING]),
  presentations: [
    "OOUX: Catálogo Comida da Gente — World Information Architecture Day 2017",
    "Catalogando o Caos: criação de um catálogo para pequenos produtores — The Developers' Conference 2017",
    "From Chaos to Order, a catalogue for Small Producers — Interaction South America 2017"
  ]
}


export default [demodern, workAndCo, globoEsporte, comidaDaGente];