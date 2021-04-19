import { Dispatch, memo, SetStateAction, useCallback, useContext, useRef, useState } from "react";
import { throttle } from "lodash";
import styles from "./app.module.scss";
import Sidebar from "./components/molecules/Sidebar";
import Header from "./components/organisms/Header";
import Body from "./components/organisms/Body";
import { ThemeContext, ThemeInterface } from "./utils/contexts/ThemeContext";
import { CSSTransition } from "react-transition-group";
import "./animation.scss";
import BottomNavbar from "./components/molecules/BottomNavbar";


function App(): JSX.Element {
  const [headerVisible, setHeaderVisible] = useState<boolean>(false);
  const [theme, _] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);
  const profileRef = useRef<HTMLDivElement>();

  const handleScroll = (event: any): any => {
    if (profileRef && profileRef.current)
      console.log("ref=", (profileRef.current?.clientHeight - (0.13) * window.innerHeight), event.target.scrollTop);
    if (profileRef && profileRef.current && event.target.scrollTop >= profileRef?.current?.clientHeight - (0.13) * window.innerHeight)
      setHeaderVisible(true);
    else
      setHeaderVisible(false);
  }

  const throttledHandleScroll = useCallback(throttle((event) => handleScroll(event), 100), []);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container} style={theme.body}>
        <div className={styles.sidebar} style={theme.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content} onScroll={(event) => throttledHandleScroll(event)}>
          <CSSTransition
            in={headerVisible}
            timeout={300}
            classNames={"header"}
            addEndListener={() => { }}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Header />
          </CSSTransition>
          <Body profileRef={profileRef ? profileRef : { current: null }} />
        </div>
      </div >
      <BottomNavbar />
    </div>
  );
}

export default memo(App);
