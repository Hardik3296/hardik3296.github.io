import { Dispatch, SetStateAction, useContext } from "react";
import image from "../../../assets/images/example.jpg";
import styles from "./styles.module.scss";
import SocialMedia from "../Social-Media";
import { ThemeContext, ThemeInterface } from "../../../utils/contexts/ThemeContext";

const Profile = (): JSX.Element => {

   const [theme, _] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);

   return (
      <div className={styles.row} id="me" style={theme.text}>
         <div className={styles.firstDiv}>
            <img src={image} alt="me" className={styles.image} />
         </div>
         <div className={styles.secondDiv}>
            <p className={styles.name}>Hardik Gaur</p>
            <div className={styles.contact}>
               <SocialMedia size={50} icons={theme.icons} />
            </div>
         </div>
      </div>
   );
}

export default Profile;