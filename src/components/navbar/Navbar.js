import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left_sec}>
        <span>{"<RauchRods/>"}</span>
      </div>
      <div className={styles.right_sec}>
        <span><NavLink end to={'/about'}>About</NavLink> </span>
        <span><NavLink end to={'/projects'}>Projects</NavLink> </span>
        <span className={styles.contact_btn}><NavLink end to={'/contact'}>Contact Me</NavLink> </span>
      </div>
    </nav>
  );
}

export default Navbar;
