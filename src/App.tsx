import { Dispatch, SetStateAction, useCallback, useContext, useState } from "react";
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

  const handleScroll = (event: any): any => {
    if (event.target.scrollTop >= 420)
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
          <Body />
        </div>
      </div >
      <BottomNavbar />
    </div>
  );
}

export default App;
