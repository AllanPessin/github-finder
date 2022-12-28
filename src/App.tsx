import { Outlet } from "react-router-dom";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <h1>Github Finder</h1>
      <Outlet />
    </div>
  )
}

export default App
