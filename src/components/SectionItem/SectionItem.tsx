import { HTMLAttributes } from "react";
import ReactMarkdown from "react-markdown";

import Skills from "@/components/Skills/Skills";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Presentations from "@/components/Presentations/Presentations";
import Extracurricular from "@/components/Extracurricular/Extracurricular";

import { TSectionItem } from "~/types";

import styles from "./SectionItem.module.scss";

type TSection = HTMLAttributes<HTMLDivElement>;

const SectionItem: React.FC<TSectionItem & TSection> = ({ title,
  dates,
  subtitle,
  description,
  skills,
  grade,
  extracurricular,
  presentations
}) => {
  return (
    <div className={styles.sectionItem} key={title}>
      <SectionTitle dates={dates} grade={grade} title={title} subtitle={subtitle} />
      <div className={styles.content}>
        <ReactMarkdown className={styles.description}>{description}</ReactMarkdown>
        {
          (presentations || extracurricular) &&
          <div className={styles.extras}>
            <Presentations presentations={presentations} />
            <Extracurricular extracurricular={extracurricular} />
          </div>
        }
        <Skills className={styles.skills} skills={skills} />
      </div>

    </div>
  )
};

export default SectionItem;
