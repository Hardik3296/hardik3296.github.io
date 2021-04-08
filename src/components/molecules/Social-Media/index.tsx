import { memo } from "react";
import { GitHub, LinkedIn, Mail, Person } from "@material-ui/icons";
import styles from "./styles.module.scss";
import GeeksForGeeks from "../../atoms/GeeksForGeeksSvg";
import { IconInterface } from "../../../utils/contexts/ThemeContext";
type PropTypes = {
   size: number,
   icons: IconInterface
};

const SocialMedia = memo(({ size, icons }: PropTypes) => {
   return (
      <>
         <a className={styles.icon} href="https://www.linkedin.com/in/hardik-gaur-135891122/" target="blank"><LinkedIn style={{ color: icons.linkedin.color, fontSize: size }} /></a>
         <a href="mailto:hardik3296@outlook.com" className={styles.icon}><Mail style={{ color: icons.mail.color, fontSize: size }} /></a>
         <a href="https://auth.geeksforgeeks.org/user/HGaur/articles" target="blank" className={styles.icon}><GeeksForGeeks width={size} height={size} color={icons.mail.color} /></a>
         <a href="https://github.com/Hardik3296" target="blank" className={styles.icon}><GitHub style={{ color: icons.github.color, fontSize: size }} /></a>
      </>
   );
});

export default SocialMedia;