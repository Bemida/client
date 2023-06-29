import styles from './style.module.css'
import Grid from './Grid'
import { DataContext } from "../Context/MainContext";
import { useState, useContext } from "react";
import Size from "../Components/Size";
import Viewer3d from "../Components/Viewer3d";
import Selector_main from "../Components/Selector_main";
import ProgressBar from "../Components/ProgressBar";
import Sidebar from "../Components/Sidebar";
import Button from "../Components/Button";
import Header from "../Components/Header";
import DisplayCurrentSelection from "./DisplayCurrentSelection";
import errorChecking from '../Functions/errorChecking';
import SideBarInner from "../Components/SideBarInner";
import { useNavigate, useRoutes } from 'react-router-dom';

//Creator : didi 


function Layout() {
  const context = useContext(DataContext);
  const navigate = useNavigate();
  const [errorsMsg, setErrorsMsg] = useState([])


  const submitClick = () => {

    const errors = errorChecking(context)
    setErrorsMsg(errors)
    if (errors.length > 0) return false
    console.log(context.stage);
    if (context.stage === 5) {
      navigate('payment')
    }

    context.setStage(prev => prev !== 5 ? prev + 1 : prev)
  }

  const submitClickback = () => {
    console.log(context.stage);
    setErrorsMsg(errorChecking(context))
    context.setStage(prev => prev !== 1 ? prev - 1 : prev)
  }

  const btyforward = <Button className={styles.nextButton} onClick={submitClick} text={'המשך'} />
  const btyBack = <Button className={styles.btyBack} onClick={submitClickback} text={'אחורה'} isLeft={false} />

  const header = <Header />;
  // const progressBar = "progressBar";
  const progressBar = <ProgressBar />;
  const To_Main_Section = {
    1: <Selector_main />,
    2: <Size />,
    3: <Viewer3d />,
    4: <Viewer3d />,
    5: [<Viewer3d />, <Viewer3d withDoors= {true} />],
  };
  const To_RightBar = {
    1: "",
    2: "",
    3: <Sidebar title={"בחירת הסגנון האהוב עליך"} />,
    4: <SideBarInner title={'בחירת העיצוב פנים האהוב עליך'} />,
    5: "",
  };
  const To_LeftBar = {
    1: "",
    2: "",
    // 3: "3LB",
    3: <DisplayCurrentSelection />,
    4: <DisplayCurrentSelection />,
    5: <DisplayCurrentSelection />,
  };
  // const Main_Section = To_Main_Section[2]
  const Main_Section = To_Main_Section[context.stage];
  const RightBar = To_RightBar[context.stage];
  const LeftBar = To_LeftBar[context.stage];
  return (
    <div className={styles.containerLayout}>
      <Grid Main_Section={Main_Section} RightBar={RightBar} LeftBar={LeftBar} progressBar={progressBar} btyforward={btyforward} btyBack={btyBack} header={header} errorsMsg={errorsMsg} />
    </div>
  )
}

export default Layout