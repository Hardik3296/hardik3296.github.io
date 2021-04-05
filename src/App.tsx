import React, { useState } from "react";
import { throttle } from "lodash";
import styles from "./app.module.scss";
import Body from "./components/organisms/Body";
import Sidebar from "./components/molecules/Sidebar";

function App(): JSX.Element {
  const [headerVisible, setHeaderVisible] = useState<boolean>(false);
  function handleScroll(event: any): any {
    if (event.target.scrollTop > 281)
      setHeaderVisible(true);
    else
      setHeaderVisible(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content} onScroll={(event) => { handleScroll(event) }}>
        < Body />
      </div >
    </div>
  );
}

export default App;
