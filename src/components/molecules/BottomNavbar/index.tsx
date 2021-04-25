import { Dispatch, SetStateAction, useContext, useRef } from "react";
import { GitHub, NightsStay, Person, WbSunny } from "@material-ui/icons";
import studyImage from "../../../assets/images/study.png";
import newJob from "../../../assets/images/new-job.png";
import "../Sidebar/animation.scss";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import styles from "../Sidebar/styles.module.scss";
import bottomStyles from "./styles.module.scss";
import { ThemeContext, ThemeInterface, themes } from "../../../utils/contexts/ThemeContext";

const handleClick = (link: string): void => {
   window.location.hash = link;
}

const BottomNavbar = (): JSX.Element => {

   const [theme, setTheme] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);
   const themeRef = useRef(theme === themes.light ? "light" : "dark");

   return (
      <div className={bottomStyles.bottomNavigation} style={theme.sidebar}>
         <div test-id="me" onClick={() => handleClick("me")}><Person className={styles.person} /></div>
         <div test-id="Education" onClick={() => handleClick("education")}><img src={studyImage} alt="" className={styles.imageIcons} /></div>
         <div test-id="WorkEx" onClick={() => handleClick("work-experience")}><img src={newJob} alt="" className={styles.imageIcons} /></div>
         <div test-id="GithubRepos" onClick={() => handleClick("github-repos")}><GitHub className={styles.github} /></div>
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

export default BottomNavbar;