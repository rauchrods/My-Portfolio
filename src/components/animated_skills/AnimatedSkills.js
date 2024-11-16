import React, { useEffect, useState } from "react";
import styles from "./AnimatedSkills.module.css";
import { mySkills } from "../../assets/data/myskills";

function AnimatedSkills() {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSkill((prevState) =>
        prevState < mySkills.length - 1 ? prevState + 1 : 0
      );
    }, 900);

    return () => clearTimeout(timer);
  }, [currentSkill]);

  return (
    <div
      className={styles.skills_section}
      style={{ color: mySkills[currentSkill].color }}
    >
      <span>{mySkills[currentSkill].skill}</span>

      <span className={styles.svg_container}>{mySkills[currentSkill].svg}</span>
    </div>
  );
}

export default AnimatedSkills;
