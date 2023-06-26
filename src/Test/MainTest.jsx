import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Aviad from './Aviad'
import David from './David'
import Didi from './Didi'
import Efrat from './Efrat'
import Hadassah from './Hadassah'
import Michael from './Michael'
import Neri from './Neri'
import Netanel from './Netanel'
import Omri from './Omri'
import Rotem from './Rotem'
import Tzvi from './Tzvi'
import Yehuda from './Yehuda'
import Yonatan from './Yonatan'
import Yosef_sh from './Yosef_sh'
import Yosef_si from './Yosef_si'
import Haya from './Haya'

function MainTest() {
        return (
                <div>

                        <Routes>
                                <Route path="/didi" element={<Didi />} />
                                <Route path="/aviad" element={<Aviad />} />
                                <Route path="/david" element={<David />} />
                                <Route path="/efrat" element={<Efrat />} />
                                <Route path="/hadassah" element={<Hadassah />} />
                                <Route path="/michael" element={<Michael />} />
                                <Route path="/neri" element={<Neri />} />
                                <Route path="/netanel" element={<Netanel />} />
                                <Route path="/omri" element={<Omri />} />
                                <Route path="/rotem" element={<Rotem />} />
                                <Route path="/tzvi" element={<Tzvi />} />
                                <Route path="/yehuda" element={<Yehuda />} />
                                <Route path="/yonatan" element={<Yonatan />} />
                                <Route path="/yosef_si" element={<Yosef_si />} />
                                <Route path="/yosef_sh" element={<Yosef_sh />} />
                                <Route path="/haya" element={<Haya />} />
                        </Routes >



                </div >
        )
}

export default MainTest