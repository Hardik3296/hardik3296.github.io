import { Dispatch, SetStateAction, useContext, memo } from "react";
import Profile from "../../molecules/Profile";
import GitHubRepos from "../../molecules/Github-repos";
import Education from "../../molecules/Education";
import WorkExperience from "../../molecules/Work-experience";
import styles from "./body.module.scss";
import { ThemeInterface, ThemeContext } from "../../../utils/contexts/ThemeContext";
import ErrorBoundary from "../../../utils/ErrorBoundary";

const Body = ({ profileRef }: { profileRef: any }): JSX.Element => {

   const [theme, _] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);

   return (
      <div className={styles.container} style={theme.body}>
         <Profile profileRef={profileRef} />
         <Education />
         <WorkExperience />
         <ErrorBoundary textcolor={theme.error.text.color}>
            <GitHubRepos />
         </ErrorBoundary>
      </div>
   )
}

export default memo(Body);