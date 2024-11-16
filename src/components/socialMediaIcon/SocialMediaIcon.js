import styles from "./SocialMediaIcon.module.css";

function SocialMediaIcon({ children, link }) {
  function navigateHandler() {
    window.open(link, "_blank", "noopener,noreferrer");
  }
  return (
    <div className={styles.social_media_icon} onClick={navigateHandler}>
      {children}
    </div>
  );
}

export default SocialMediaIcon;
