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
  description: `I've managed my engineering education alongside my design education. Due to my good grades, I got scholarships to be a tutor for Technical Drawing courses (2009 until 2011) and Electonics III course (2011). My Undergraduate thesis in Engineering complemented my Design one, for both focused in local producers. It was an application to help small producers that depend on the local free market to sell their goods to manage their business.

GECOM: During my years in university I got involved with the electronic's dept students' society, being part of the board in 2010 and 2011. Part of my responsibility was to advocate for the students' needs and organize extra curricular activities. Among the events I took part of are the "Electronics Week", "Lecture Cycle" and Arduino classes.`,
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
  description: `I've managed my design education alongside my engineering education. In 2008 I was an honorary tutor for Photography and in 2010 I got a scholarship for that. In 2012, I was selected for a scientific initiation scholarship at the Interaction Design Laboratory, for which I would supervise students on their projects involving electronics.
My Undergratuate project, a platform for organizing collective and collaborative shopping management, was acclaimed by professores. It actually came to life through Comida da Gente, having been implemented and used by the community.`,
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
During the year I studied at Goldsmiths, I assisted the student Nicky Donald in the implementation of his doctoral thesis. Ot consisted of a game to be played in an interactive installation set in one of the rooms of the university. This project involves the development of control and automation tools with Arduino, Processing, Java and DMX.`,
  extracurricular: [
    `Volleyball team`,
    `Goldsmiths Alumni Ambassador`,
  ]
}

export default [engineering, design, creativeComputing];
