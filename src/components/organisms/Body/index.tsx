import { Dispatch, SetStateAction, useContext } from "react";
import Profile from "../../molecules/Profile";
import GitHubRepos from "../../molecules/Github-repos";
import Education from "../../molecules/Education";
import WorkExperience from "../../molecules/Work-experience";
import styles from "./body.module.scss";
import { ThemeInterface, ThemeContext } from "../../../utils/contexts/ThemeContext";

const Body = (): JSX.Element => {

   const [theme, _] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext)
   console.log("Body rendered");
   return (
      <div className={styles.container} style={theme.body}>
         <Profile />
         <Education />
         <WorkExperience />
         <GitHubRepos />
      </div>
   )
}

export default Body;