import { Menu, MenuItem } from "@material-ui/core";
import { GitHub, LinkedIn, Mail, Menu as MenuIcon } from "@material-ui/icons";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { ThemeContext, ThemeInterface } from "../../../utils/contexts/ThemeContext";
import GeeksForGeeks from "../../../assets/svgs/GeeksForGeeksSvg";

const DrawerComponent = (): JSX.Element => {
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
   const [theme, _setTheme] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);
   const iconStyle = { ...theme.text, marginLeft: 20 };

   const handleClose = () => {
      setAnchorEl(null);
   }
   const handleClick = (event: any) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
   }
   const handleIconClick = (link: string, target: string): void => {
      handleClose();
      window.open(link, target);
   }
   return (
      <>
         <MenuIcon onClick={handleClick} style={{ color: theme.text.color }} />
         <Menu open={Boolean(anchorEl)} onClose={handleClose} anchorEl={anchorEl} MenuListProps={{ disablePadding: true, autoFocus: false }}>
            <MenuItem test-id="LinkedIn" style={theme.sidebar} onClick={() => handleIconClick("https://www.linkedin.com/in/hardik-gaur-135891122/", "_blank")}>
               <LinkedIn
                  style={{ color: theme.icons.linkedin.color, fontSize: 35, marginRight: 20, }} />
               <span style={theme.text}>Linkedin</span>
            </MenuItem>
            <MenuItem test-id="Mail" style={theme.sidebar} onClick={() => handleIconClick("mailto:hardik3296@outlook.com", "_self")}>
               <Mail
                  style={{ color: theme.icons.mail.color, fontSize: 35, marginRight: 20, }}
               />
               <span style={theme.text}>Mail</span></MenuItem>
            <MenuItem test-id="GeeksForGeeks" style={theme.sidebar} onClick={() => handleIconClick("https://auth.geeksforgeeks.org/user/HGaur/articles", "_blank")} >
               <GeeksForGeeks
                  width={35}
                  height={35}
                  color={theme.icons.mail.color}
               />
               <span style={iconStyle}>Geeksforgeeks</span></MenuItem>
            <MenuItem test-id="Github" style={theme.sidebar} onClick={() => handleIconClick("https://github.com/Hardik3296", "_blank")}>
               <GitHub
                  style={{ color: theme.icons.github.color, fontSize: 35, marginRight: 20, }} />
               <span style={theme.text}>Github</span></MenuItem>
         </Menu>
      </>
   );
}

export default DrawerComponent;