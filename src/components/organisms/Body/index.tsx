import React from "react";
import Profile from "../../molecules/Profile";
import GitHubRepos from "../../molecules/Github-repos";
import Education from "../../molecules/Education";
import WorkExperience from "../../molecules/Work-experience";
import styles from "./body.module.scss";

const Body = (): JSX.Element => {

   return (
      <div className={styles.container}>
         <Profile />
         <Education />
         <WorkExperience />
         <GitHubRepos />
      </div>
   )
}

export default Body;