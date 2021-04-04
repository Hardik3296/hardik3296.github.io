import React from "react";
import styles from "./body.module.scss";
import image from "../../../assets/images/example.jpg";
import { LinkedIn, Email, GitHub } from "@material-ui/icons";
import GitHubRepos from "../../molecules/Github-repos";
import Education from "../../molecules/Education";
import WorkExperience from "../../molecules/Work-experience";

const Body = (): JSX.Element => {

   return (
      <div className={styles.container}>
         <div className={styles.row}>
            <div className={styles.firstDiv}>
               <img src={image} alt="me" className={styles.image} />
            </div>
            <div className={styles.secondDiv}>
               <p className={styles.name}>Hardik Gaur</p>
               <div className={styles.contact}>
                  <a href="https://www.linkedin.com/in/hardik-gaur-135891122/" target="blank"><LinkedIn style={{ color: "blue" }} /></a>
                  <a href="mailto:hardik3296@outlook.com"><Email /></a>
                  <a href="https://github.com/Hardik3296" target="blank"><GitHub /></a>
               </div>
            </div>
         </div>
         <Education />
         <WorkExperience />
         <GitHubRepos />
      </div>
   )
}

export default Body;