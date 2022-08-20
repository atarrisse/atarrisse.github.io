import SectionItem from "@/components/SectionItem/SectionItem";

import styles from "./Section.module.scss";

const Section = ({ sectionTitle, items }) => (
  <section className={styles.section}>
    <h3 className={styles.title}>{sectionTitle}</h3>
    <ul className={styles.content}>
      {
        items.map((data) => (
          <li key={data}>
            <SectionItem {...data} />
          </li>
        ))
      }
    </ul>
  </section>
);

export default Section;
