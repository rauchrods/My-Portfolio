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
        <Logo />
        <div className={styles.right_sec}>
          <span>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? styles["myactive"] : "")}
            >
              About
            </NavLink>
          </span>
          <span>
            <NavLink
              to={"/projects"}
              className={({ isActive }) => (isActive ? styles["myactive"] : "")}
            >
              Projects
            </NavLink>
          </span>
          <span>
            <NavLink
              to={"/github"}
              className={({ isActive }) => (isActive ? styles["myactive"] : "")}
            >
              Github
            </NavLink>
          </span>
          <span className={styles.contact_btn}>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? styles["myactive"] : "")}
            >
              Contact Me
            </NavLink>
          </span>
        </div>
        <div className={styles.hamburger_menu} onClick={menuClickHandler}>
          {isMenuClicked ? <AiOutlineMenuUnfold /> : <AiOutlineMenu />}
        </div>
      </nav>

      {isMenuClicked && (
        <div className={styles.menu_bar}>
          <span>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? styles["myactive"] : "")}
              onClick = {menuClickHandler}
            >
              About
            </NavLink>
          </span>
          <span>
            <NavLink
              to={"/projects"}
              className={({ isActive }) => (isActive ? styles["myactive"] : "")}
              onClick = {menuClickHandler}
            >
              Projects
            </NavLink>
          </span>
          <span>
            <NavLink
              to={"/github"}
              className={({ isActive }) => (isActive ? styles["myactive"] : "")}
              onClick = {menuClickHandler}
            >
              Github
            </NavLink>
          </span>
          <span className={styles.contact_btn}>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? styles["myactive"] : "")}
              onClick = {menuClickHandler}
            >
              Contact Me
            </NavLink>
          </span>
        </div>
      )}
    </div>
  );
}

export default Navbar;
