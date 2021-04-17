import { Dispatch, SetStateAction, useContext } from "react";
import SocialMedia from "../../molecules/Social-Media";
import image from "../../../assets/images/example.jpg"
import styles from "./styles.module.scss";
import { ThemeContext, ThemeInterface } from "../../../utils/contexts/ThemeContext";


const Header = (): JSX.Element => {

   const [theme, _] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);
   return (
      <div className={styles.container} style={theme.header}>
         <img src={image} className={styles.image} alt="" />
         <p style={theme.text}>Hardik Gaur</p>
         <div className={styles.iconDiv}>
            <SocialMedia size={35} icons={theme.icons} />
         </div>
      </div>
   );
}

export default Header;