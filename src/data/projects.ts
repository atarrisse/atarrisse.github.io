import { TJob } from "~/types"

const doutoresDaAlegria: TJob = {
  title: "[Balanço Geral](https://balanco.doutoresdaalegria.org.br/)",
  company: "[Doutores da Alegria](https://doutoresdaalegria.org.br/)",
  dates: new Date("01/01/2021"),
  description: `I was responsible for the implementation of the first digital version of the Balanço Geral of the NGO Doutores da Alegria., using Gatsby, Sass and Vercel. Worked alongside one designer, making sure the designs would be as accessible as possible.`
}
const gatsby: TJob = {
  title: "Open Source: Gatsby Documentation Translation",
  company: "[Gatsby PT-BR](https://github.com/gatsbyjs/gatsby-pt-BR)",
  dates: new Date("01/01/2020"),
  description: `Translation of some pages of Gatsby's documentation from English to Portuguese in an attempt to make it accessible to Brazilians.`
}

const sarajevo: TJob = {
  title: "Open Source: Letters from Sarajevo Translatiom",
  company: "[Letters from Sarajevo](https://lettersfromsarajevo.com/)",
  dates: new Date("01/01/2020"),
  description: `Translation of the content from English to Portuguese.`
}

const smartLivingProject: TJob = {
  title: "Smart Living Project",
  company: "Swedish Institute + Hyper Island",
  dates: new Date("01/01/2015"),
  description: `Worked as a Product Manager and Product Designer on the proposal of an [ubiquitous platform](https://medium.com/@atarrisse/smart-living-challenge-2015-team-brazil-project-2e1cfd85e8e0#c37d-54dd64477496) to promote a sense of belonging within the community of the biggest university campus for the Federal University of Rio de Janeiro The project was presented at the Swedish Embassy as well as at the Sustainable Innovation Forum in Paris (COP21).`
}

export default [doutoresDaAlegria, gatsby, sarajevo, smartLivingProject]