import { Dispatch, SetStateAction, useContext } from "react";
import { GitHub, Person, WbSunny, NightsStay } from "@material-ui/icons";
import styles from "./styles.module.scss";
import studyImage from "../../../assets/images/study.png";
import newJob from "../../../assets/images/new-job.png";
import { ThemeContext, ThemeInterface, themes } from "../../../utils/contexts/ThemeContext";

const Sidebar = (): JSX.Element => {

   const [theme, setTheme] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);

   return (
      <div className={styles.container}>
         <div className={styles.topIconDiv}>
            <a href="#me"><Person style={{ color: "#6c63ff", fontSize: "12vh" }} /></a>
            <a href="#education"><img src={studyImage} alt="" style={{ width: "12vh", height: "12vh" }} /></a>
            <a href="#work-experience"><img src={newJob} alt="" style={{ width: "12vh", height: "12vh" }} /></a>
            <a href="#github-repos"><GitHub style={{ color: "#6c63ff", fontSize: "10vh" }} /></a>
         </div>
         <div className={styles.bottomIconDiv}>
            {theme == themes.light ? <NightsStay onClick={() => setTheme(themes.dark)} style={{ color: "#00000", fontSize: "8vh" }} /> : <WbSunny onClick={() => setTheme(themes.light)} style={{ color: "#f5f509", fontSize: "8vh" }} />}
         </div>
      </div>)
}

export default Sidebar;