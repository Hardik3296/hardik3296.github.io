import { Dispatch, memo, SetStateAction, useContext } from "react";
import SocialMedia from "../../molecules/Social-Media";
import image from "../../../assets/images/me.jpg"
import styles from "./styles.module.scss";
import { ThemeContext, ThemeInterface } from "../../../utils/contexts/ThemeContext";
import DrawerComponent from "../../atoms/Drawer";


const Header = (): JSX.Element => {

   const [theme, _setTheme] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);
   return (
      <div className={styles.container} style={theme.header}>
         <img src={image} className={styles.image} alt="My pic" test-id="image" />
         <p className={styles.name} style={theme.text} test-id="name">Hardik Gaur</p>
         <div className={styles.iconDiv} test-id="social-media">
            <SocialMedia size={35} icons={theme.icons} />
         </div>
         <div className={styles.drawerDiv} test-id="menu">
            <DrawerComponent />
         </div>
      </div>
   );
}

export default memo(Header);