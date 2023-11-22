import styles from "./Header.module.css";

import avatar from "../../assets/images/mf-avatar.svg";
import decicesImg from "../../assets/images/hero-devices.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title_wrapper}>
        <div className={styles.title}>Designer,Frontend React Developer</div>
        <div className={styles.description}>
          I design and code beautifully simple things, and I love what I do.
        </div>
      </div>
      <img src={avatar} alt="avatar description" />
      <img src={decicesImg} alt="description of decives" />
    </header>
  );
}

export default Header;
