import { Dispatch, SetStateAction, useContext } from "react";
import { ThemeContext, ThemeInterface } from "../../../utils/contexts/ThemeContext";
import styles from "./styles.module.scss";
import Icons8SVG from "../../../assets/svgs/Icons8SVG";
import MaterialUISVG from "../../../assets/svgs/MaterialUISVG";
import ReactSVG from "../../../assets/svgs/ReactSVG";
import SassSVG from "../../../assets/svgs/SassSVG";
import TypeScriptSVG from "../../../assets/svgs/TypeScriptSVG";


const Footer = (): JSX.Element => {

   const [theme, _] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);

   const handleCLick = (link: string): void => {
      window.open(link, "_blank");
   }

   return (
      <div className={styles.container} style={{ backgroundColor: theme.repos.div.background }}>
         <p style={theme.text} test-id="text">Made with </p>
         <ReactSVG test-id="react-icon" height={50} width={50} className={styles.svg} onClick={() => handleCLick("https://reactjs.org/")} />
         <SassSVG test-id="sass-icon" height={50} width={50} className={styles.svg} onClick={() => handleCLick("https://sass-lang.com/")} />
         <MaterialUISVG test-id="material-icon" height={50} width={50} className={styles.svg} onClick={() => handleCLick("https://material-ui.com/")} />
         <Icons8SVG test-id="icons8-icon" height={50} width={50} className={styles.svg} onClick={() => handleCLick("https://icons8.com/")} />
         <TypeScriptSVG test-id="typescript-icon" height={50} width={50} className={styles.svg} onClick={() => handleCLick("https://www.typescriptlang.org/")} />
      </div>
   );
}

export default Footer;