import React, { useEffect, useState } from "react";
import styles from "./AnimatedSkills.module.css";
import { mySkills } from "../../assets/data/myskills";
import { motion } from "framer-motion";

function AnimatedSkills() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSkill((prevState) =>
        prevState < mySkills.length - 1 ? prevState + 1 : 0
      );
      setKey((prevKey) => prevKey + 1);
    }, 900);

    return () => clearTimeout(timer);
  }, [currentSkill]);

  return (
    <motion.div
      key={key}
      initial={{ scale: 0.35, opacity: 0.7 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 500,
          damping: 15,
        },
      }}
      className={styles.skills_section}
      style={{ color: mySkills[currentSkill].color }}
    >
      <span>{mySkills[currentSkill].skill}</span>

      <span className={styles.svg_container}>{mySkills[currentSkill].svg}</span>
    </motion.div>
  );
}

export default AnimatedSkills;
