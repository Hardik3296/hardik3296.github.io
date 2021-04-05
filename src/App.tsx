import React from "react";
import styles from "./app.module.scss";
import Body from "./components/organisms/Body";
import Sidebar from "./components/molecules/Sidebar";

function App(): JSX.Element {

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        < Body />
      </div >
    </div>
  );
}

export default App;
