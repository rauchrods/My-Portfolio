import React, { useEffect, useState } from "react";
import styles from "./Github.module.css";
// import { useLoaderData} from 'react-router-dom';

// export const loadGithubData = async () => {
//     const response = await fetch("https://api.github.com/users/rauchrods");
//     return response.json();
//   };

function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/rauchrods")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  // const data = useLoaderData();

  return (
    <div className={styles.github_page}>
      <img src={data.avatar_url} alt="" />
      <div className={styles.details}>
        <div className={styles.followers_sec}>
          <span>Followers: {data.followers}</span>
          <span>Following: {data.following}</span>
        </div>
        <span>Location: {data.location}</span>
        <a href={data.html_url} target="_blank" rel="noreferrer">
          Click here to see my github profile
        </a>
      </div>

      <div>Data fetched from free Github api : {'https://api.github.com/users/{username}'} </div>
    </div>
  );
}

export default Github;
