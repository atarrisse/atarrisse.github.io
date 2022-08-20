import { IconPrefix } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SocialLink.module.scss";

const SocialLink = ({ icon, iconFamily = "fab", url }) => (
  <a
    href={url}
    className={styles.socialLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={[iconFamily as IconPrefix, icon]} />
  </a>
);

export default SocialLink