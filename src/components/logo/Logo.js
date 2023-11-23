import styles from "./Logo.module.css";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className={styles.logo}>
      <span>
        <NavLink end to={"/"}>
          {"<RauchRods/>"}
        </NavLink>
      </span>
    </div>
  );
}

export default Logo;
