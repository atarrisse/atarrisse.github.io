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
    "Internal: React, the good bits", "Internal: Git basics"
  ],
}

const workAndCo: TJob = {
  title: "Developer",
  company: "[Work&Co](https://work.co/)",
  dates: {
    from: new Date("01 July 2019"),
    to: new Date("01 June 2021"),
  },
  description: `Worked on big and small projects for different industries, with different stacks, in an agile environment. Tasks involved project setup, feature development, collaborating with peers, pull requests evaluation. Lead a tech team on a 10 days pro-bono project, [Neighbour Share](https://nbshare.org/), as well as on the development of [AKDM](https://akdm.co/). One thing that stand me out of the crowd was my work GDPR vulnerability assessments and accessibility audits. As a part of the Accessibility Advocate initiative, I helped colleagues from other projects to solve their challenges. Took the stage for a few knowledge shares as well as for my own Game Show broadcasted to the Brazilian Offices.`,
  skills: new Set([
    SKILLS.TYPESCRIPT, SKILLS.JAVASCRIPT, SKILLS.HTML, SKILLS.CSS, SKILLS.SASS, SKILLS.STYLED_COMPONENTS, SKILLS.TAILWIND, SKILLS.REACT, SKILLS.REST_API, SKILLS.NEXT_JS, SKILLS.STRAPI, SKILLS.NODE, SKILLS.REDUX, SKILLS.GATSBY, SKILLS.ANGULAR, SKILLS.GRAPH_QL, SKILLS.RTL, SKILLS.RTL, SKILLS.ENZYME, SKILLS.JEST, SKILLS.GITHUB, SKILLS.GITLAB
  ]),
  presentations: [
    "Internal: Gatbsy", "Internal: Flutter", "Internal: Watson Assistance"
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
  description: `Lead a team of four developers and one designer through several time-sensitive projects, as well as in building our own publishing platform. In partnership with a award-winning infographics team, I developed editorial and sponsored SPAs that entertain and inform users. I also led the redesign of an internal publishing tool that manages the workflow of the newsroom, from ideation to usability tests. Took care of recruitment and mentoring of interns.`,
  skills: new Set([
    SKILLS.JAVASCRIPT, SKILLS.HTML, SKILLS.CSS, SKILLS.SASS, SKILLS.REACT, SKILLS.REST_API, SKILLS.GRAPH_QL, SKILLS.WEBPACK, SKILLS.CANVAS, SKILLS.DATA_VISUALIZATION
  ])
}

const comidaDaGente: TJob = {
  title: "Product Designer / Business Analyst",
  company: "Comida da Gente",
  dates: {
    from: new Date("01 Jan 2015"),
    to: new Date("01 June 2017")
  },
  description: `“Comida da Gente” was born as a social-network-based shared economy initiative, in which a community would get together to buy large quantities of organic products directly from small producers. I started out as the Product Designer of the startup, conducting market research, stakeholder interviews, coming up with concepts, drawing wireframes, taking care of final designs and usability tests with a variety of users. The information architecture of the platform was based on the [Object Oriented UX methodology](https://www.ooux.com/), which has proven to be very efficint to keep all teams in sync regarding data structure and taxonomy.
By the end of 2015, I also became part of the company's operations and business team, being responsible for captivating the community inside and outside social networks. I was able to grow the number of members from 6k to 44k and to engage over 20 new producers. I was responsible for the logistics of hundreds of collective purchases, created documents' templates to help community members, as well as coded some scripts to automate some of the work.`,
  skills: new Set([SKILLS.OOUX, SKILLS.UX, SKILLS.USABILITY_TEST, SKILLS.SHEETS, SKILLS.UI, SKILLS.IA, SKILLS.ADOBE_ILLUSTRATOR, SKILLS.DESIGN_THINKING]),
  presentations: [
    "World Information Architecture Day 2017: OOUX: Catálogo Comida da Gente",
    "The Developers' Conference 2017: Catalogando o Caos: criação de um catálogo para pequenos produtores",
    "Interaction South America 2017: From Chaos to Order, a catalogue for Small Producers"
  ]
}


export default [demodern, workAndCo, globoEsporte, comidaDaGente];