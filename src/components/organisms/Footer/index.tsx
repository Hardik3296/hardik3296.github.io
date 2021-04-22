import { Dispatch, SetStateAction, useContext } from "react";
import { ThemeContext, ThemeInterface } from "../../../utils/contexts/ThemeContext";
import styles from "./styles.module.scss";
import Icons8SVG from "../../../assets/svgs/Icons8SVG";
import MaterialUISVG from "../../../assets/svgs/MaterialUISVG";
import ReactSVG from "../../../assets/svgs/ReactSVG";
import SassSVG from "../../../assets/svgs/SassSVG";


const Footer = (): JSX.Element => {

   const [theme, _] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);

   const handleCLick = (link: string): void => {
      window.open(link, "_blank");
   }

   return (
      <div className={styles.container} style={{ backgroundColor: theme.repos.div.background }}>
         <p style={theme.text}>Made with </p>
         <ReactSVG height={50} width={50} className={styles.svg} onClick={() => handleCLick("https://reactjs.org/")} />
         <SassSVG height={50} width={50} className={styles.svg} onClick={() => handleCLick("https://sass-lang.com/")} />
         <MaterialUISVG height={50} width={50} className={styles.svg} onClick={() => handleCLick("https://material-ui.com/")} />
         <Icons8SVG height={50} width={50} className={styles.svg} onClick={() => handleCLick("https://icons8.com/")} />
      </div>
   );
}

export default Footer;