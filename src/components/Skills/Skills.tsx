import Skill from "@/components/Skills/Skill/Skill";

import { SKILLS } from "~/types";

import styles from "./Skills.module.scss";

const Skills = ({ skills, className = "" }) => (
  <ul className={`${styles.skills} ${className}`}>
    {Array.from(skills).map((skill: SKILLS) => (
      <li key={skill}>
        <Skill skill={skill} />
      </li>
    ))}
  </ul>
);

export default Skills;
