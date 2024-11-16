import styles from "./Header.module.css";

import avatar from "../../assets/images/mf-avatar.jpg";
import decicesImg from "../../assets/images/hero-devices.svg";
import AnimatedSkills from "../animated_skills/AnimatedSkills";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title_wrapper}>
        <div className={styles.title}>Designer,FullStack Developer</div>
        <div className={styles.description}>
          I design and code beautifully simple things, and I love what I do.
        </div>
      </div>
      <AnimatedSkills />
      <motion.img
        src={avatar}
        alt="avatar description"
        className={styles.avatar}
        initial={{ opacity: 0, y: 20, scale: 1, rotate: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: {
            rotate: {
              repeat: Infinity,
              duration: 2,
            },
            scale: {
              type: "spring",
              stiffness: 300,
            },
          },
        }}
        whileTap={{
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: {
            rotate: {
              repeat: Infinity,
              duration: 2,
            },
            scale: {
              type: "spring",
              stiffness: 300,
            },
          },
        }}
        whileInView={{ rotate: 0 }}
        transition={{
          duration: 0.5,
          type: "tween",
          ease: "easeOut",
        }}
      />
      <h2 className={styles.gradient_text}>{"<Rauch Rodrigues/>"}</h2>
      <img src={decicesImg} alt="description of decives" />
    </header>
  );
}

export default Header;
