import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import {Aviad, David, Didi, Efrat, Hadassah, Michael, Neri, Netanel, Omri, Rotem, Tzvi, Yael, Yehuda, Yiska, Yonatan, Yoseffus, } from '../Test'
import Didi from './Didi'


function MainTest() {
  return (
    <div>

      <Routes>
        <Route path="/didi" element={<Didi />} />
        {/* <Route path = "/aviad" element = {<Aviad/>}/>
  <Route path = "/david" element = {<David/>}/>
  <Route path = "/efrat" element = {<Efrat/>}/>
  <Route path = "/hadassah" element = {<Hadassah/>}/>
  <Route path = "/michael" element = {<Michael/>}/>
  <Route path = "/neri" element = {<Neri/>}/>
  <Route path = "/netanel" element = {<Netanel/>}/>
  <Route path = "/omri" element = {<Omri/>}/>
  <Route path = "/rotem" element = {<Rotem/>}/>
  <Route path = "/tzvi" element = {<Tzvi/>}/>
  <Route path = "/yael" element = {<Yael/>}/>
  <Route path = "/yehuda" element = {<Yehuda/>}/>
  <Route path = "/yiska" element = {<Yiska/>}/>
  <Route path = "/yonatan" element = {<Yonatan/>}/>
  <Route path = "/yoseffus" element = {<Yoseffus/>}/>
  <Route path = "/yosef_si" element = {<Yosef_si/>}/>
  <Route path = "/yosef_sh" element = {<Yosef_sh/>}/> */}
      </Routes>



    </div>
  )
}

export default MainTest