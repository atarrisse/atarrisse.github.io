import { HTMLAttributes } from "react";

import { TSectionItem } from "~/types";

import styles from "./Extracurricular.module.scss";

type TExtracurricular = HTMLAttributes<HTMLDivElement>;

interface IExtracurricular extends Pick<TSectionItem, 'extracurricular'> { }

const Extracurricular: React.FC<IExtracurricular & TExtracurricular> = ({ title,
  extracurricular,
}) => {
  if (!extracurricular) return <></>;
  return (
    <div className={styles.extracurricular}>
      <h5>Other activities</h5>
      <ul>
        {extracurricular.map(extra => (
          <li key={extra}>{extra}</li>
        ))}
      </ul>
    </div>
  )
};

export default Extracurricular;
