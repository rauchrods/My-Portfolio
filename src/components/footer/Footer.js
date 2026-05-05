import Logo from "../logo/Logo";
import styles from "./Footer.module.css";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const socials = [
  { icon: <FaLinkedin />,  link: "https://www.linkedin.com/in/rauchrodrigues/", label: "LinkedIn"  },
  { icon: <FaGithub />,   link: "https://github.com/rauchrods",               label: "GitHub"    },
  { icon: <FaInstagram />, link: "https://www.instagram.com/raudricks1508/",  label: "Instagram" },
  { icon: <FaFacebook />,  link: "https://www.facebook.com/rauch.rodrigues/", label: "Facebook"  },
  { icon: <FaTwitter />,   link: "https://twitter.com/rauchrodrigues",        label: "Twitter"   },
];

const navLinks = [
  { to: "about",    label: "About"    },
  { to: "projects", label: "Projects" },
  { to: "github",   label: "Github"   },
  { to: "contact",  label: "Contact"  },
];

function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Brand */}
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tagline}>Living, learning, &amp; leveling up one day at a time.</p>
          <div className={styles.socials}>
            {socials.map(({ icon, link, label }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={styles.social_btn}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className={styles.nav_col}>
          <h4 className={styles.col_heading}>Navigation</h4>
          <ul className={styles.nav_list}>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={styles.nav_link}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <span className={styles.copyright}>
          © {new Date().getFullYear()} Rauch Rodrigues. All rights reserved.
        </span>
        <span className={styles.made_with}>
          Made with <FiCode className={styles.code_icon} /> and React
        </span>
        <span className={styles.clock}>
          {time.toLocaleDateString()} · {time.toLocaleTimeString()}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
