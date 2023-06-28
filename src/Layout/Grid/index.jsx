import Errors from "../../Components/Errors";
import styles from "./style.module.css";

//Creator : didi - add div to className
//Creator : didi - add context

function Grid({Main_Section,progressBar,RightBar,LeftBar,bty,header,errorsMsg}) {
  
  

  return (
    <div className={styles.containerGrid}>
      <div className={styles.h}>
        {header}
      </div>
      <div className={styles.ms}>
        {Main_Section}
      </div>
      <div className={styles.c}>
        {progressBar}
      </div>
      <div className={styles.d}>
        {errorsMsg.length > 0 && <Errors errorsMsg={errorsMsg}/>}
        {bty}
      </div>
      <div className={styles.sr}>
        {RightBar}
      </div>
      <div className={styles.sl}>
        {LeftBar}
      </div>

    </div>
  );
}

export default Grid;

