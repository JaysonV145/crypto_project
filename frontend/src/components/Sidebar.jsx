import React from "react";
import "../assets/styles.css";
import styles from "../components/Sidebar.module.css";
import profilePic from "../assets/userlogo.jpg";
import { IconContext } from "react-icons";
import { FaHome, FaBell, FaCog, FaMarker } from "react-icons/fa";

const Sidebar = () => {
  return (
    <IconContext.Provider
      value={{ size: "20px", style: { marginRight: "10px" } }}
    >
      <aside className={styles.sidebar}>
        <div className={styles.containerLogo}>
          <h1 className={styles.titleLogo}>Crypto's</h1>
          <p className={styles.role}>Inversor</p>
        </div>

        <div className={styles.profile}>
          <img
            src={profilePic}
            alt="User Profile"
            className={styles.profilePic}
          />
          <h3 className={styles.username}>John Doe</h3>
          <p className={styles.role}>Inversor</p>
        </div>
        <nav className={styles.menu}>
          <ul>
            <li className={styles.menuItem}>
              <a href="#">
                <FaHome className={styles.icon} />
                Inicio
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="#">
                <FaMarker className={styles.icon} />
                Mercado
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="#">
                <FaBell className={styles.icon} />
                Noticias
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="#">
                <FaCog className={styles.icon} />
                Configuración
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </IconContext.Provider>
  );
};

export default Sidebar;
