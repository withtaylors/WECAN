import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import styles from "./App.module.css";
import "./App.font.css";

function Main({ children }) {
  return (
    <>
      <Header className={styles.header} />
      <div className={styles.body}>
        <Outlet />
      </div>
      <Footer className={styles.footer} />
    </>
  )
}

export default Main;