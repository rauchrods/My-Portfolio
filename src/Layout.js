import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import DownloadRibbon from "./components/downloadRibbon/DownloadRibbon";

function Layout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <Outlet />
      <DownloadRibbon />
      <Footer />
    </div>
  );
}

export default Layout;
