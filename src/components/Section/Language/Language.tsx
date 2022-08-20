import styles from "../Section.module.scss";

const Language = ({ sectionTitle, items }) => (
  <section className={styles.section}>
    <h3 className={styles.title}>{sectionTitle}</h3>
    <ul className={styles.language}>
      {
        items.map((data) => (
          <li key={data}>
            <p>
              <strong>{data.acronym}</strong>
              {data.level}
            </p>
          </li>
        ))
      }
    </ul>
  </section>
);

export default Language;
