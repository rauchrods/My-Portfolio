import styles from "./Header.module.css";
import avatar from "../../assets/images/mf-avatar.jpeg";
import AnimatedSkills from "../animated_skills/AnimatedSkills";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      {/* ── Left: text ── */}
      <div className={styles.left}>
        <motion.div className={styles.greeting} {...fadeUp(0.05)}>
          Hey there, I'm
        </motion.div>

        <motion.h1 className={styles.name} {...fadeUp(0.12)}>
          Rauch<br />Rodrigues
        </motion.h1>

        <motion.div className={styles.role_row} {...fadeUp(0.2)}>
          <span className={styles.role_badge}>Designer</span>
          <span className={styles.role_dot} />
          <span className={styles.role_badge}>Full-Stack Developer</span>
        </motion.div>

        <motion.p className={styles.description} {...fadeUp(0.28)}>
          I design and code beautifully simple things,
          and I love what I do.
        </motion.p>

        <motion.div className={styles.skill_row} {...fadeUp(0.35)}>
          <span className={styles.skill_label}>Currently working with</span>
          <AnimatedSkills />
        </motion.div>

        <motion.div className={styles.cta_row} {...fadeUp(0.42)}>
          <button
            className={styles.btn_primary}
            onClick={() => navigate("/projects")}
          >
            View Projects <FiArrowRight />
          </button>
          <button
            className={styles.btn_secondary}
            onClick={() => navigate("/contact")}
          >
            Hire Me
          </button>
        </motion.div>
      </div>

      {/* ── Right: avatar ── */}
      <motion.div
        className={styles.right}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <div className={styles.avatar_ring}>
          <motion.img
            src={avatar}
            alt="Rauch Rodrigues"
            className={styles.avatar}
            whileHover={{
              scale: 1.05,
              rotate: [0, -4, 4, 0],
              transition: { rotate: { repeat: Infinity, duration: 2 }, scale: { type: "spring", stiffness: 300 } },
            }}
            whileTap={{
              scale: 1.05,
              rotate: [0, -4, 4, 0],
              transition: { rotate: { repeat: Infinity, duration: 2 } },
            }}
          />
        </div>
        <div className={styles.avatar_glow} />
      </motion.div>
    </header>
  );
}

export default Header;
