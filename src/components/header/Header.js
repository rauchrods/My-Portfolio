import styles from "./Header.module.css";

import avatar from "../../assets/images/mf-avatar.jpg";
import decicesImg from "../../assets/images/hero-devices.svg";
import AnimatedSkills from "../animated_skills/AnimatedSkills";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title_wrapper}>
        <div className={styles.title}>Designer,Frontend Developer</div>
        <div className={styles.description}>
          I design and code beautifully simple things, and I love what I do.
        </div>
      </div>
      <AnimatedSkills/>
      <img src={avatar} alt="avatar description" />
      <h2>{'<Rauch Rodrigues/>'}</h2>
      <img src={decicesImg} alt="description of decives" />
    </header>
  );
}

export default Header;
