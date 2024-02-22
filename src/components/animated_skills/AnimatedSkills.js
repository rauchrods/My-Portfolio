import React, { useState } from "react";
import styles from "./AnimatedSkills.module.css";

function AnimatedSkills() {
  const skills = [
    {
      skill: "<HTML/>",
      color: "orange",
    },
    {
      skill: "Css",
      color: "blue",
    },
    {
      skill: "{Javascript}",
      color: "rgb(223, 226, 34)",
    },
    {
      skill: "<React/>",
      color: "blue",
    },
    {
      skill: "<NextJs/>",
      color: "black",
    },
    {
      skill: "Java",
      color: "red",
    },
    {
      skill: "Flutter",
      color: "blue",
    },
    {
      skill: "Dart",
      color: "blue",
    },
  ];

  const [currentSkill, setCurrentSkill] = useState(0);

  const timer = setTimeout(() => {
    setCurrentSkill((prevState) => {
      if (prevState < skills.length - 1) {
        return prevState + 1;
      } else {
        return 0;
      }
    });

    return () => {
      clearTimeout(timer);
    };
  }, 1200);

  return (
    <div
      className={styles.skills_section}
      style={{ color: skills[currentSkill].color }}
    >
      {skills[currentSkill].skill}
    </div>
  );
}

export default AnimatedSkills;
