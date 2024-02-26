import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";
import Logo from "../logo/Logo";

const navBarItems = [
  {
    to: "about",
    label: "About",
  },
  {
    to: "projects",
    label: "Projects",
  },
  {
    to: "github",
    label: "Github",
  },
  {
    to: "contact",
    label: "Contact",
  },
];

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
          {navBarItems.map((navBarItem) => (
            <span>
              <NavLink
                to={navBarItem.to}
                className={({ isActive }) =>
                  isActive ? styles["myactive"] : ""
                }
              >
                {navBarItem.label}
              </NavLink>
            </span>
          ))}
        </div>
        <div className={styles.hamburger_menu} onClick={menuClickHandler}>
          {isMenuClicked ? <AiOutlineMenuUnfold /> : <AiOutlineMenu />}
        </div>
      </nav>

      {isMenuClicked && (
        <div className={styles.menu_bar}>
          {navBarItems.map((navBarItem) => (
            <span>
              <NavLink
                to={navBarItem.to}
                className={({ isActive }) =>
                  isActive ? styles["myactive"] : ""
                }
                onClick={menuClickHandler}
              >
                {navBarItem.label}
              </NavLink>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
