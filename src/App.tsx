import { Dispatch, SetStateAction, useCallback, useContext, useState } from "react";
import { throttle } from "lodash";
import styles from "./app.module.scss";
import Sidebar from "./components/molecules/Sidebar";
import Header from "./components/organisms/Header"
import Body from "./components/organisms/Body";
import { ThemeContext, ThemeInterface } from "./utils/contexts/ThemeContext";


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
    <div className={styles.container}>
      <div className={styles.sidebar} style={theme.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content} onScroll={(event) => throttledHandleScroll(event)}>
        {headerVisible && <Header />}
        <Body />
      </div >
    </div>
  );
}

export default App;
