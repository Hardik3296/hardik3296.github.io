import { Dispatch, memo, SetStateAction, useContext, useRef } from "react";
import { GitHub, Person, WbSunny, NightsStay } from "@material-ui/icons";
import styles from "./styles.module.scss";
import studyImage from "../../../assets/images/study.png";
import newJob from "../../../assets/images/new-job.png";
import { ThemeContext, ThemeInterface, themes } from "../../../utils/contexts/ThemeContext";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./animation.scss";

const Sidebar = (): JSX.Element => {
   const [theme, setTheme] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);
   const themeRef = useRef(theme === themes.light ? "light" : "dark");
   return (
      <div className={styles.container}>
         <div className={styles.topIconDiv}>
            <a href="#me"><Person style={{ color: "#6c63ff", fontSize: "12vh" }} /></a>
            <a href="#education"><img src={studyImage} alt="" style={{ width: "12vh", height: "12vh" }} /></a>
            <a href="#work-experience"><img src={newJob} alt="" style={{ width: "12vh", height: "12vh" }} /></a>
            <a href="#github-repos"><GitHub style={{ color: "#6c63ff", fontSize: "10vh" }} /></a>
         </div>
         <SwitchTransition>
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
                     <NightsStay style={{ color: "#777777", fontSize: "8vh", opacity: "0.87" }} />
                     : <WbSunny style={{ color: "#f5f509", fontSize: "8vh" }} />
                  }
               </div>
            </CSSTransition>
         </SwitchTransition>
      </div >
   );
}

export default memo(Sidebar);