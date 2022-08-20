import { TJob, SKILLS } from "types";

const hugeInc: TJob = {
  title: "Developer Intern",
  company: "[Huge Inc](https://www.hugeinc.com/)",
  dates: {
    from: new Date("01/06/2014"),
    to: new Date("01/06/2015"),
  },
  description: `At Huge Inc. I had the opportunity for a variety of industries and to grow from a task-based intern to a be responsible for my own projects. I started out working on an interactive infographic piece for Vale do Rio Doce, got to develop features of projects such as the Rio Galeão website and Bradesco Seguros. I had a major role in the Multiplan project, leading the development myself. Apart from that I've bring to life lots of interactive styleguides (deliverable to clients), as well as lots of low and high fidelity prototypes used for usability testing. As an intern, I developed a pro-bono project for a beneficent initiative called E-Solidário.
Once a week I run an "English club", a 1 hour English-only conversational session during lunch time. The club started with less than 5 members and in a couple of months we'd have sessions with over 15 people.`,
  skills: new Set([
    SKILLS.WEB_COMPONENTS, SKILLS.JAVASCRIPT, SKILLS.CSS, SKILLS.LESS, SKILLS.SASS, SKILLS.PUG, SKILLS.WEBPACK, SKILLS.HTML
  ]),
  extracurricular: [
    "English club"
  ]
}

const iceInteractive: TJob = {
  title: "Developer Intern",
  company: "ICE Interactive",
  dates: {
    from: new Date("01/01/2012"),
    to: new Date("01/12/2012"),
  },
  description: `ICE Interactive was an incubated company (by COPPE-UFRJ) that developed real-life analysis tools. 
By installing sensors at strategic points in commercial establishments, it was possible to extract anonymized data from consumers behaviour. I was responsible for the design and development of a web-based client platform where the data would be visualized. In addition, I've put efforts into social events to better integrate ICE's own employees, as well as integrate ICE with other incubated companies.`,
  skills: new Set([
    SKILLS.JAVASCRIPT, SKILLS.CSS, SKILLS.HTML, SKILLS.UI, SKILLS.DATA_VISUALIZATION
  ]),
  extracurricular: [
    "Company breakfast"
  ]
}

export default [hugeInc, iceInteractive]