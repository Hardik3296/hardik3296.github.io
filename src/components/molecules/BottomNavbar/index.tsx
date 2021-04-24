import { Dispatch, SetStateAction, useContext, memo, useRef, useState } from "react";
import { GitHub, NightsStay, Person, WbSunny } from "@material-ui/icons";
import studyImage from "../../../assets/images/study.png";
import newJob from "../../../assets/images/new-job.png";
import "../Sidebar/animation.scss";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import styles from "../Sidebar/styles.module.scss";
import bottomStyles from "./styles.module.scss";
import { ThemeContext, ThemeInterface, themes } from "../../../utils/contexts/ThemeContext";

const BottomNavbar = (): JSX.Element => {
   const [theme, setTheme] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);
   const themeRef = useRef(theme === themes.light ? "light" : "dark");

   return (
      <div className={bottomStyles.bottomNavigation} style={theme.sidebar}>
         <a href="#me" test-id="me"><Person className={styles.person} /></a>
         <a href="#education" test-id="Education"><img src={studyImage} alt="" className={styles.imageIcons} /></a>
         <a href="#work-experience" test-id="WorkEx"><img src={newJob} alt="" className={styles.imageIcons} /></a>
         <a href="#github-repos" test-id="GithubRepos"><GitHub className={styles.github} /></a>
         <SwitchTransition>
            <CSSTransition
               key={themeRef.current}
               classNames={"theme"}
               addEndListener={() => { }}
               timeout={500}
            >
               <div test-id="ThemeIcon" className={styles.bottomIconDiv} onClick={() => {
                  themeRef.current = themeRef.current === "light" ? "dark" : "light";
                  setTheme(theme === themes.light ? themes.dark : themes.light)
               }}>
                  {theme === themes.dark ?
                     <NightsStay className={styles.nightsStay} />
                     : <WbSunny className={styles.sunny} />
                  }
               </div>
            </CSSTransition>
         </SwitchTransition>
      </div>
   );
}

export default memo(BottomNavbar);