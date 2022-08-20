import { HTMLAttributes } from "react";
import ReactMarkdown from "react-markdown";

import Skills from "@/components/Skills/Skills";

import { formatDate } from "@/utils";

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
      <div className={styles.button}>
        <div className={styles.timeframe}>
          {
            !(dates instanceof Date) &&
            <>
              <p>{formatDate(dates.to)}</p>
              <p>{formatDate(dates.from)}</p>
            </>
          }
        </div>
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
      <div className={styles.content}>
        <ReactMarkdown className={styles.description}>{description}</ReactMarkdown>
        {
          (presentations || extracurricular) &&
          <div className={styles.extras}>
            {presentations &&
              <div className={styles.extra}>
                <h5>Presentations</h5>
                <ul>
                  {presentations.map(extra => (
                    <li key={extra}>{extra}</li>
                  ))}
                </ul>
              </div>
            }
            {extracurricular &&
              <div className={styles.extra}>
                <h5>Other activities</h5>
                <ul>
                  {extracurricular.map(extra => (
                    <li key={extra}>{extra}</li>
                  ))}
                </ul>
              </div>
            }
          </div>
        }

      </div>

      <div className={styles.footer}>
        {skills && <Skills className={styles.skills} skills={skills} />}
      </div>


    </div>
  )
};

export default SectionItem;
