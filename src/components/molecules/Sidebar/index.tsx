import React from "react";
import { GitHub, Person } from "@material-ui/icons";
import styles from "./styles.module.scss";
import studyImage from "../../../assets/images/study.png";
import newJob from "../../../assets/images/new-job.png";

const Sidebar = (): JSX.Element => {

   return (
      <div className={styles.container}>
         <div className={styles.iconDiv}>
            <a href="#me"><Person style={{ color: "#6c63ff", fontSize: 60 }} /></a>
            <a href="#education"><img src={studyImage} alt="" style={{ width: 70, height: 70 }} /></a>
            <a href="#work-experience"><img src={newJob} alt="" style={{ width: 70, height: 70 }} /></a>
            <a href="#github-repos"><GitHub style={{ color: "#6c63ff", fontSize: 60 }} /></a>
         </div>
      </div>)
}

export default Sidebar;