import { TEducation } from "~/types";

const engineering: TEducation = {
  institution: {
    fullName: "Universidade Federal do Rio de Janeiro",
    acronym: "UFRJ"
  },
  degreeLevel: "Bachelor",
  course: "Electronics and Computing Engineering",
  dates: {
    from: new Date("01/01/2008"),
    to: new Date("01/01/2016")
  },
  grade: {
    value: 7.2,
    total: 10
  },
  description: `I've managed my engineering education alongside my design education. My Undergraduate thesis in Engineering complemented my Design one, for both focused in local producers. It was an application to help small producers that depend on the local free market to sell their goods to manage their business.
I got envolved with a students' group called GECOM that supported students. I have taken part in several activities such as organizing events, helping with the specialized library, coming up with summer extracurrilcourses, providing equipment (such as Arduinos or Raspberry Pis)`,
  extracurricular: [
    "GECOM (Electronics and Computing Dept Students' Group)",
    "Technical Drawing tutor",
    "Electronics III tutor"
  ]
}

const design: TEducation = {
  institution: {
    fullName: "Universidade do Estado do Rio de Janeiro",
    acronym: "UERJ"
  },
  degreeLevel: "Bachelor",
  course: "Design",
  dates: {
    from: new Date("01/01/2006"),
    to: new Date("01/01/2015")
  },
  grade: {
    value: 8,
    total: 10
  },
  description: `I've managed my design education alongside my engineering education. My Undergratuate project, a platform for organizing collective and collaborative shopping management, was acclaimed by professores. It actually came to life through Comida da Gente, having been implemented and used by the community.`,
  extracurricular: [
    `Class representative`,
    `Photography tutor`,
    `staff for the International Congress of Research in Design`,
    `staff for the "Japanese Design Today 100" exhibit`,
    `scientific Initiation student at the Interaction Design Lab`
  ]
}

const creativeComputing: TEducation = {
  institution: {
    fullName: "Goldsmiths, University of London",
    acronym: null
  },
  degreeLevel: "Exchange Program",
  course: "Creative Computing",
  dates: {
    from: new Date("01/01/2013"),
    to: new Date("01/12/2013")
  },
  grade: {
    value: 3.96,
    total: 5
  },
  description: `Study abroad year with a scholarship from Science without Borders program.
During the year I studied at Goldsmiths, I assisted the PhD student Nicky Donald in the implementation of his doctoral thesis, which consisted of a game to be played in an interactive installation set in one of the rooms of the university. This project involves the development of control and automation tools with Arduino, Processing, Java and DMX.`,
  extracurricular: [
    `Volleyball team`,
    `Goldsmiths Alumni Ambassador`,
  ]
}

export default [engineering, design, creativeComputing];
