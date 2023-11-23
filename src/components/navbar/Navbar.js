import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";
import Logo from "../logo/Logo";

function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  function menuClickHandler() {
    setIsMenuClicked((prevState) => !prevState);
  }

  return (
    <div className={styles.nav_container}>
      <nav className={styles.navbar}>
        <Logo/>
        <div className={styles.right_sec}>
          <span>
            <NavLink end to={"/about"}>
              About
            </NavLink>{" "}
          </span>
          <span>
            <NavLink end to={"/projects"}>
              Projects
            </NavLink>{" "}
          </span>
          <span className={styles.contact_btn}>
            <NavLink end to={"/contact"}>
              Contact Me
            </NavLink>{" "}
          </span>
        </div>
        <div className={styles.hamburger_menu} onClick={menuClickHandler}>
          {isMenuClicked ? <AiOutlineMenuUnfold /> : <AiOutlineMenu />}
        </div>
      </nav>

      {isMenuClicked && (
        <div className={styles.menu_bar}>
          <span>
            <NavLink end to={"/about"}>
              About
            </NavLink>{" "}
          </span>
          <span>
            <NavLink end to={"/projects"}>
              Projects
            </NavLink>{" "}
          </span>
          <span className={styles.contact_btn}>
            <NavLink end to={"/contact"}>
              Contact Me
            </NavLink>{" "}
          </span>
        </div>
      )}
    </div>
  );
}

export default Navbar;
