import { HTMLAttributes } from "react";

import { formatDate } from "@/utils";

import { TDeltaTime } from "~/types";

import styles from "./Timeframe.module.scss";

type TSection = HTMLAttributes<HTMLDivElement>;

interface ITimeframe {
  dates: TDeltaTime | Date;
}

const Timeframe: React.FC<ITimeframe & TSection> = ({
  dates,
}) => {
  const hasOneDate = (dates instanceof Date);
  return (
    <div className={styles.timeframe} data-only-child={hasOneDate}>
      {
        hasOneDate
          ? <p>{dates.getFullYear()}</p>
          : <>
            <p>{formatDate(dates.to)}</p>
            <p>{formatDate(dates.from)}</p>
          </>
      }
    </div>
  )
};

export default Timeframe;
