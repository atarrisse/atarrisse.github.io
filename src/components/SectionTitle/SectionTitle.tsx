import { HTMLAttributes } from "react";
import ReactMarkdown from "react-markdown";

import { TSectionItem } from "~/types";

import styles from "./SectionTitle.module.scss";
import Timeframe from "../Timeframe/Timeframe";

type TSectionTitle = HTMLAttributes<HTMLDivElement>;

interface ISectionTitle extends Pick<TSectionItem,
  'dates'
  | 'grade'
  | 'subtitle'
  | 'title'
> { };

const SectionTitle: React.FC<ISectionTitle & TSectionTitle> = ({ title,
  dates,
  subtitle,
  grade,
}) => {
  return (
    <div className={styles.sectionTitle}>
      <Timeframe dates={dates} />
      <h4 className={styles.title}>
        <ReactMarkdown>{title}</ReactMarkdown>
      </h4>
      <ReactMarkdown className={styles.subtitle}>{subtitle}</ReactMarkdown>
      {grade &&
        <div className={styles.grade}>
          {grade.value}<span>/{grade.total}</span>
        </div>
      }
    </div>
  )
};

export default SectionTitle;
