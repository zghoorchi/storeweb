import { RotatingLines } from "react-loader-spinner"
import styles from "./Loader.module.css"
function Loader() {
  return (
    <div className={styles.loader}>
        <RotatingLines width="100" height="100" strockwidth="3" strokeColor="red"/>
    </div>
  )
}

export default Loader