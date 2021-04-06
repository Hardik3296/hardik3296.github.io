import React from "react";
import { LinkedIn, GitHub, Mail } from "@material-ui/icons"
import image from "../../../assets/images/example.jpg"
import styles from "./styles.module.scss";


const Header = () => {
   return (
      <div className={styles.container}>
         <img src={image} className={styles.image} alt="" />
         <p>Hardik Gaur</p>
         <div className={styles.iconDiv}>
            <a className={styles.icon} href="https://www.linkedin.com/in/hardik-gaur-135891122/" target="blank"><LinkedIn style={{ color: "#0077b5", fontSize: 35 }} /></a>
            <a href="mailto:hardik3296@outlook.com" className={styles.icon}><Mail style={{ color: "#6c63ff", fontSize: 35 }} /></a>
            <a href="https://github.com/Hardik3296" target="blank" className={styles.icon}><GitHub style={{ color: "#000000", fontSize: 35 }} /></a>
         </div>
      </div>
   );
}

export default Header;