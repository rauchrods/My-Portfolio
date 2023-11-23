import styles from "./SocialMediaIcon.module.css";

function SocialMediaIcon({ children, link }) {
  function navigateHandler() {
    window.location.href = link;
  }
  return (
    <div className={styles.social_media_icon} onClick={navigateHandler}>
      {children}
    </div>
  );
}

export default SocialMediaIcon;
