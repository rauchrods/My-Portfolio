import Logo from "../logo/Logo";
import SocialMediaIcon from "../socialMediaIcon/SocialMediaIcon";
import styles from "./Footer.module.css";
import { FaTwitter, FaLinkedin,FaReact  } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <span>Living, learning, & leveling up one day at a time.</span>
      <div className={styles.social_media_icons}>
        <SocialMediaIcon link={"https://twitter.com/rauchrodrigues"}>
          <FaTwitter />
        </SocialMediaIcon>
        <SocialMediaIcon link={"https://www.linkedin.com/in/rauchrodrigues/"}>
          <FaLinkedin />
        </SocialMediaIcon>
        <SocialMediaIcon link={"https://twitter.com/rauchrodrigues"}>
          <FaTwitter />
        </SocialMediaIcon>
        <SocialMediaIcon link={"https://www.linkedin.com/in/rauchrodrigues/"}>
          <FaLinkedin />
        </SocialMediaIcon>
      </div>
      <span>Made by me © 2023</span>
      <span className={styles.react_statement}>Made with <FaReact/></span>
    </footer>
  );
}

export default Footer;
