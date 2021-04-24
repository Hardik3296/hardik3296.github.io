import { memo } from "react";
import { GitHub, LinkedIn, Mail } from "@material-ui/icons";
import GeeksForGeeks from "../../../assets/svgs/GeeksForGeeksSvg";
import { IconInterface } from "../../../utils/contexts/ThemeContext";
import styles from "./styles.module.scss";

type PropTypes = {
   size: number,
   icons: IconInterface,
   maxWidth?: string
};

const SocialMedia = memo(({ size, icons }: PropTypes) => {

   const handleClick = (link: string, target: string): void => {
      window.open(link, target)
   }

   return (
      <>
         <LinkedIn
            test-id="linkedin"
            className={styles.icon}
            style={{ color: icons.linkedin.color, fontSize: size, marginRight: 20, }}
            onClick={() => { handleClick("https://www.linkedin.com/in/hardik-gaur-135891122/", "_blank") }} />
         <Mail
            test-id="mail"
            className={styles.icon}
            style={{ color: icons.mail.color, fontSize: size, marginRight: 20, }}
            onClick={() => { handleClick("mailto:hardik3296@outlook.com", "_self") }} />
         <GeeksForGeeks
            test-id="geeksforgeeks"
            className={styles.icon}
            width={size}
            height={size}
            color={icons.mail.color}
            onClick={() => { handleClick("https://auth.geeksforgeeks.org/user/HGaur/articles", "_blank") }} />
         <GitHub
            test-id="github"
            className={styles.icon}
            style={{ color: icons.github.color, fontSize: size, marginLeft: 20, }}
            onClick={() => { handleClick("https://github.com/Hardik3296", "_blank") }} />
      </>
   );
});

export default memo(SocialMedia);