import Logo from "../logo/Logo";
import SocialMediaIcon from "../socialMediaIcon/SocialMediaIcon";
import styles from "./Footer.module.css";
import {
  FaTwitter,
  FaLinkedin,
  FaReact,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { useState } from "react";

function Footer() {
  const [currentDate, setCurrentDate] = useState(new Date());

  setTimeout(() => {
    setCurrentDate(new Date());
  }, 1000);

  return (
    <footer className={styles.footer}>
      <Logo />
      <span>Living, learning, & leveling up one day at a time.</span>
      <div className={styles.social_media_icons}>
        <SocialMediaIcon link={"https://www.linkedin.com/in/rauchrodrigues/"}>
          <FaLinkedin />
        </SocialMediaIcon>
        <SocialMediaIcon link={"https://www.instagram.com/raudricks1508/"}>
          <FaInstagram />
        </SocialMediaIcon>
        <SocialMediaIcon link={"https://www.facebook.com/rauch.rodrigues/"}>
          <FaFacebook />
        </SocialMediaIcon>
        <SocialMediaIcon link={"https://twitter.com/rauchrodrigues"}>
          <FaTwitter />
        </SocialMediaIcon>
      </div>
      <span>Made by Rauch Rodrigues © {new Date().getFullYear()}</span>
      <span className={styles.react_statement}>
        Made with <FaReact />
      </span>

      <div className={styles.date_time_sec}>
        <span>{currentDate.toLocaleDateString()}</span>
        <span>{currentDate.toLocaleTimeString()}</span>
      </div>
    </footer>
  );
}

export default Footer;
