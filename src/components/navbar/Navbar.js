import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../logo/Logo";

const navBarItems = [
  { to: "about",    label: "About"    },
  { to: "projects", label: "Projects" },
  { to: "github",   label: "Github"   },
  { to: "contact",  label: "Contact"  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function menuClickHandler() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <div className={styles.nav_container}>
      <nav className={styles.navbar}>
        <Logo />

        <div className={styles.right_sec}>
          {navBarItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${styles.nav_link} ${isActive ? styles.active : ""}`
              }
            >
              {item.label}
              <span className={styles.underline} />
            </NavLink>
          ))}
        </div>

        <button
          className={styles.hamburger_menu}
          onClick={menuClickHandler}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isMenuOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              exit={{    rotate:  90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: "flex" }}
            >
              {isMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.menu_bar}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{    height: 0,      opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {navBarItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `${styles.mobile_link} ${isActive ? styles.active : ""}`
                  }
                  onClick={menuClickHandler}
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
