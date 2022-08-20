import styles from "./Skill.module.scss";

const Skill = ({ skill }) => (
  <span className={styles.skill}>{skill}</span>
);

export default Skill;