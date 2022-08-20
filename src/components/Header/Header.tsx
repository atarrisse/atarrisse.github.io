import SocialLink from "@/components/SocialLink/SocialLink";

import info from "@/data/info";

import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>{info.name}</h1>

    <div className={styles.personal}>
      <h2>{info.title}</h2>
      <p>{info.nationality}, {info.location} based</p>
    </div>

    {
      info.social &&
      <ul className={styles.social}>
        {Object.values(info.social).map((social) => (
          <li key={social.url}>
            <SocialLink {...social} />
          </li>
        ))}
      </ul>
    }
  </header>
);

export default Header
