import { memo } from "react";
import { GitHub, LinkedIn, Mail } from "@material-ui/icons";
import styles from "./styles.module.scss";
import GeeksForGeeks from "../../atoms/GeeksForGeeksSvg";
import { IconInterface } from "../../../utils/contexts/ThemeContext";
type PropTypes = {
   size: number,
   icons: IconInterface,
   maxWidth?: string
};

const SocialMedia = memo(({ size, icons }: PropTypes) => {

   const handleClick = (link: string, target: string): void => {
      window.open(link, target)
   }

   // console.log(Math.floor((toNumber(size.substring(0, size.length - 2)) - 3) * window.innerWidth / 100));

   return (
      <>
         <LinkedIn
            style={{ color: icons.linkedin.color, fontSize: size, marginRight: 20, }}
            onClick={() => { handleClick("https://www.linkedin.com/in/hardik-gaur-135891122/", "_blank") }} />
         <Mail
            style={{ color: icons.mail.color, fontSize: size, marginRight: 20, }}
            onClick={() => { handleClick("mailto:hardik3296@outlook.com", "_self") }} />
         <GeeksForGeeks
            width={size}
            height={size}
            color={icons.mail.color}
            onClick={() => { handleClick("https://auth.geeksforgeeks.org/user/HGaur/articles", "_blank") }} />
         <GitHub
            style={{ color: icons.github.color, fontSize: size, marginLeft: 20, }}
            onClick={() => { handleClick("https://github.com/Hardik3296", "_blank") }} />
      </>
   );
});

export default SocialMedia;