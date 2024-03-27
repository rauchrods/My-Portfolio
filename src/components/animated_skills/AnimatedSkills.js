import React, { useState } from "react";
import styles from "./AnimatedSkills.module.css";
import { mySkills } from "../../assets/data/myskills";



function AnimatedSkills() {
  const [currentSkill, setCurrentSkill] = useState(0);

  const timer = setTimeout(() => {
    setCurrentSkill((prevState) => {
      if (prevState < mySkills.length - 1) {
        return prevState + 1;
      } else {
        return 0;
      }
    });

    return () => {
      clearTimeout(timer);
    };
  }, 800);

  return (
    <div
      className={styles.skills_section}
      style={{ color: mySkills[currentSkill].color }}
    >
      <span>{mySkills[currentSkill].skill}</span>

      <span>{mySkills[currentSkill].svg}</span>
    </div>
  );
}

export default AnimatedSkills;
