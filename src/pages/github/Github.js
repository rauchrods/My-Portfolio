import React, { useEffect, useState } from "react";
import styles from "./Github.module.css";
import { FiUsers, FiUserCheck, FiMapPin, FiBookOpen, FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Github() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/rauchrods")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className={styles.github_page}>
        <div className={styles.skeleton_avatar} />
        <div className={styles.skeleton_line} style={{ width: "160px" }} />
        <div className={styles.skeleton_line} style={{ width: "220px" }} />
      </div>
    );
  }

  return (
    <div className={styles.github_page}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Avatar */}
        <div className={styles.avatar_wrapper}>
          <img src={data.avatar_url} alt={data.name} className={styles.avatar} />
          <span className={styles.github_badge}>
            <FiGithub />
          </span>
        </div>

        {/* Name & bio */}
        <h2 className={styles.name}>{data.name}</h2>
        <p className={styles.username}>@{data.login}</p>
        {data.bio && <p className={styles.bio}>{data.bio}</p>}

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <FiUsers className={styles.stat_icon} />
            <span className={styles.stat_value}>{data.followers}</span>
            <span className={styles.stat_label}>Followers</span>
          </div>
          <div className={styles.stat_divider} />
          <div className={styles.stat}>
            <FiUserCheck className={styles.stat_icon} />
            <span className={styles.stat_value}>{data.following}</span>
            <span className={styles.stat_label}>Following</span>
          </div>
          <div className={styles.stat_divider} />
          <div className={styles.stat}>
            <FiBookOpen className={styles.stat_icon} />
            <span className={styles.stat_value}>{data.public_repos}</span>
            <span className={styles.stat_label}>Repos</span>
          </div>
        </div>

        {/* Meta */}
        {data.location && (
          <p className={styles.meta}>
            <FiMapPin />
            {data.location}
          </p>
        )}

        {/* CTA */}
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.profile_btn}
        >
          View GitHub Profile
          <FiExternalLink />
        </a>

        <p className={styles.api_note}>
          Data via{" "}
          <code>api.github.com/users/{data.login}</code>
        </p>
      </motion.div>
    </div>
  );
}

export default Github;
