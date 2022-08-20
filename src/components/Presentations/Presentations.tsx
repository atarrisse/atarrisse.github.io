import { HTMLAttributes } from "react";

import styles from "./Presentations.module.scss";
import { TSectionItem } from "~/types";

type TPresentations = HTMLAttributes<HTMLDivElement>;

interface IPresentations extends Pick<TSectionItem, 'presentations'> { }

const Presentations: React.FC<IPresentations & TPresentations> = ({
  presentations
}) => {
  if (!presentations) return <></>;
  return (
    <div className={styles.presentations}>
      <h5>Presentations</h5>
      <ul>
        {presentations.map(presentation => (
          <li key={presentation.title}>
            <small>{presentation.event} | </small>
            {presentation.title}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Presentations;
