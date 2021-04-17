import React, { Dispatch, SetStateAction, useCallback, useContext, useMemo, useRef, useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { GitHub, NightsStay, Person, WbSunny } from "@material-ui/icons";
import studyImage from "../../../assets/images/study.png";
import newJob from "../../../assets/images/new-job.png";
import "../Sidebar/animation.scss";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import styles from "../Sidebar/styles.module.scss";
import bottomStyles from "./styles.module.scss";
import { ThemeContext, ThemeInterface, themes } from "../../../utils/contexts/ThemeContext";

const BottomNavbar = (): JSX.Element => {
   const [value, setValue] = useState("About me");
   const [theme, setTheme] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);
   const themeRef = useRef(theme === themes.light ? "light" : "dark");

   return (
      <div className={bottomStyles.bottomNavigation} style={theme.sidebar}>
         <BottomNavigation value={value} style={theme.sidebar}>
            <BottomNavigationAction
               value="About me"
               icon={<a href="#me"><Person className={styles.person} /></a>}
            />
            <BottomNavigationAction
               value="Education"
               icon={<a href="#education"><img src={studyImage} alt="" className={styles.imageIcons} /></a>}
            />
            <BottomNavigationAction
               value="Work Experience"
               icon={<a href="#work-experience"><img src={newJob} alt="" className={styles.imageIcons} /></a>}
            />
            <BottomNavigationAction
               value="Projects"
               icon={<a href="#github-repos"><GitHub className={styles.github} /></a>}
            />
            <BottomNavigationAction
               icon={<SwitchTransition>
                  <CSSTransition
                     key={themeRef.current}
                     classNames={"theme"}
                     addEndListener={() => { }}
                     timeout={500}
                  >
                     <div className={styles.bottomIconDiv} onClick={() => {
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
               }
            />
         </BottomNavigation>

      </div>
   );
}

export default BottomNavbar;