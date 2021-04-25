import { Dispatch, memo, MutableRefObject, SetStateAction, useContext } from "react";
import image from "../../../assets/images/me.jpg";
import styles from "./styles.module.scss";
import SocialMedia from "../Social-Media";
import { ThemeContext, ThemeInterface } from "../../../utils/contexts/ThemeContext";
import SlideAnimation from "../../atoms/SlideAnimation";
import ErrorBoundary from "../../../utils/ErrorBoundary";

const Profile = ({ profileRef }: { profileRef: MutableRefObject<HTMLDivElement> }): JSX.Element => {

   const [theme, _setTheme] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);

   return (
      <div className={styles.row} id="me" style={theme.text} ref={profileRef}>
         <div className={styles.firstDiv} test-id="image-div">
            <ErrorBoundary textcolor={theme.error.text.color}>
               <SlideAnimation slideDirection={"slide-in-from-left"}>
                  <img src={image} alt="me" className={styles.image} />
               </SlideAnimation>
            </ErrorBoundary>
         </div>
         <div className={styles.secondDiv}>
            <ErrorBoundary textcolor={theme.error.text.color}>
               <SlideAnimation slideDirection={"slide-in-from-right"}>
                  <p className={styles.name} test-id="name">Hardik Gaur</p>
               </SlideAnimation>
            </ErrorBoundary>
            <ErrorBoundary textcolor={theme.error.text.color}>
               <SlideAnimation
                  slideDirection={"slide-in-from-bottom"}
               >
                  <div className={styles.contact} test-id="social-icons">
                     <SocialMedia size={50} icons={theme.icons} />
                  </div>
               </SlideAnimation>
            </ErrorBoundary>
         </div>
      </div>
   );
}

export default memo(Profile);