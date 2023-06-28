import styles from './style.module.css'
import Grid from './Grid'
import { DataContext } from "../Context/MainContext";
import { useState,useContext } from "react";
import Size from "../Components/Size";
import Viewer3d from "../Components/Viewer3d";
import Selector_main from "../Components/Selector_main";
import ProgressBar from "../Components/ProgressBar";
import Sidebar from "../Components/Sidebar";
import Button from "../Components/Button";
import Header from "../Components/Header";
import DisplayCurrentSelection from "./DisplayCurrentSelection";
import errorChecking from '../Functions/errorChecking';

//Creator : didi 


function Layout() {
  const context = useContext(DataContext);

  const [errorsMsg, setErrorsMsg] = useState([])
  const submitClick = () => {
    setErrorsMsg(errorChecking(context))
    context.setStage(prev => prev !== 5 ? prev + 1 : prev)
  }

  const bty = <Button className={styles.nextButton} onClick={submitClick} text={'המשך'} />
  const header = <Header />;
  // const progressBar = "progressBar";
  const progressBar = <ProgressBar />;
  const To_Main_Section = {
    1: <Selector_main />,
    2: <Size />,
    3: <Viewer3d />,
    4: <Viewer3d />,
    5: <Viewer3d />,
  };
  const To_RightBar = {
    1: "",
    2: <Sidebar />,
    3: "3RB",
    4: "4RB",
    5: "5RB",
  };
  const To_LeftBar = {
    1: "1LB",
    2: "2LB",
    // 2: <DisplayCurrentSelection />,
    3: "3LB",
    4: "4LB",
    5: "5LB",
  };
  // const Main_Section = To_Main_Section[2]
  const Main_Section = To_Main_Section[context.stage];
  const RightBar = To_RightBar[context.stage];
  const LeftBar = To_LeftBar[context.stage];
  return (
    <div className={styles.containerLayout}>
      <Grid Main_Section={Main_Section} RightBar={RightBar} LeftBar={LeftBar} progressBar={progressBar} bty={bty} header={header} errorsMsg={errorsMsg}/>
    </div>
  )
}

export default Layout