import React from 'react'
import Button from '../Components/Button'
import Counter from '../Components/Counter'
import Toggle from '../Components/Toggle'
import {IoIosArrowDown, IoIosArrowBack} from "react-icons/io"
import SidebarCollapse from '../Components/SidebarCollapse'
import SidebarTab from '../Components/SidebarTab'
import SideBarInner from '../Components/SidebarInner'

export default function Hadassah() {
  return (
    <div>
        <h1>ggg</h1>
        {/* <Button  onClick={()=>alert("hhhh")}  color="red" width="100%" height="40px" icon="Continued" text="המשך"  /> */}
        {/* <Counter defaultNumber={0}  /> */}
        {/* <Toggle defaultChecked={true} onChange={((e)=>console.log(e.target.checked))} name={name}/> */}
        {/* <span><IoIosArrowDown /></span> */}
        {/* <SidebarCollapse name={"מוט תלייה"} children={} /> */}
       < SideBarInner title={"תצוגה פנימית"}/>
    </div>
  )
}
