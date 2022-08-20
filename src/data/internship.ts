import { TJob, SKILLS } from "types";

const hugeInc: TJob = {
  title: "Developer Intern",
  company: "[Huge Inc](https://www.hugeinc.com/)",
  dates: {
    from: new Date("01/06/2014"),
    to: new Date("01/06/2015"),
  },
  description: `At Huge Inc I had the opportunity to work for big companies, from all around the world. I started out working on interactive infographic piece for Vale do Rio Doce, got to develop features of projects such as the Rio Galeão website and Bradesco Seguros. I had a major role in the Multiplan project, leading the development myself. Apart from that I've bring to life lots of interactive styleguides, as well as lots of low and high fidelity prototypes that were used by designers to validate their ideas.
As an intern, I was part of the dream team that worked on a pro-bono project for a beneficent initiative called E-Solidário. In which I was the solo responsible for its implementation.
Due to my fluency in English and teaching experience, I started an "English club". We'd held a 1 hour conversational session during lunch time once a week, in which only English was allowed. The club started with less than 5 members and in a couple of months we'd have sessions with over 15 people.`,
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
By installing sensors at strategic points in commercial establishments, it was possible to extract anonymized data from consumers. From this data we'd extract information such as whether a shop window would engage passers-by, or if one specific area of the store was gathering more attention than others or even extract metrics for specific parts of a shopping mall.
As an intern, I was responsible for developing the platform as a web application, using Java with GWT and Highcharts. In addition, I would also work on small events to better integrate ICE's own employees, as well as among other incubated companies.`,
  skills: new Set([
    SKILLS.JAVASCRIPT, SKILLS.CSS, SKILLS.HTML, SKILLS.UI
  ]),
  extracurricular: [
    "Company breakfast"
  ]
}

export default [hugeInc, iceInteractive]