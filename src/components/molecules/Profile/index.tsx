import React from "react";
import image from "../../../assets/images/example.jpg";
import { LinkedIn, Email, GitHub } from "@material-ui/icons";
import styles from "./styles.module.scss";

const Profile = (): JSX.Element => {
   return (
      <div className={styles.row} id="me">
         <div className={styles.firstDiv}>
            <img src={image} alt="me" className={styles.image} />
         </div>
         <div className={styles.secondDiv}>
            <p className={styles.name}>Hardik Gaur</p>
            <div className={styles.contact}>
               <a href="https://www.linkedin.com/in/hardik-gaur-135891122/" target="blank"><LinkedIn style={{ color: "#0077b5", fontSize: 50 }} /></a>
               <a href="mailto:hardik3296@outlook.com"><Email style={{ color: "#6c63ff", fontSize: 50 }} /></a>
               <a href="https://github.com/Hardik3296" target="blank"><GitHub style={{ color: "#000000", fontSize: 50 }} /></a>
            </div>
         </div>
      </div>
   );
}

export default Profile;