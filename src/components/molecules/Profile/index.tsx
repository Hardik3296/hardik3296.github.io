import { Dispatch, SetStateAction, useContext } from "react";
import image from "../../../assets/images/example.jpg";
import styles from "./styles.module.scss";
import SocialMedia from "../Social-Media";
import { ThemeContext, ThemeInterface } from "../../../utils/contexts/ThemeContext";
import SlideAnimation from "../../atoms/SlideAnimation";

const Profile = (): JSX.Element => {

   const [theme, _] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);

   return (
      <div className={styles.row} id="me" style={theme.text}>
         <div className={styles.firstDiv}>
            <SlideAnimation slideDirection={"slide-in-from-left"} mountCondition={true}>
               <img src={image} alt="me" className={styles.image} />
            </SlideAnimation>
         </div>

         <div className={styles.secondDiv}>
            <SlideAnimation slideDirection={"slide-in-from-right"} mountCondition={true}>
               <p className={styles.name}>Hardik Gaur</p>
            </SlideAnimation>
            <SlideAnimation
               mountCondition={true}
               slideDirection={"slide-in-from-bottom"}
            >
               <div className={styles.contact}>
                  <SocialMedia size={50} icons={theme.icons} />
               </div>
            </SlideAnimation>
         </div>

      </div>
   );
}

export default Profile;