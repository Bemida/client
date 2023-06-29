import React from 'react'
import Button from '../Components/Button'
// import Payment from '../Components/Payment'
import axios from 'axios';
import orders from '../Data/fakeDataTest'
import { messageTemplate } from '../Data/messageTemplate';
import { renderToString } from 'react-dom/server'
import CurrentSelections from '../Components/CurrentSelections';
import { useContext } from 'react';
import { DataContext } from '../Context/MainContext'
import { messageTemplate2 } from '../Data/messageTemplate2';

export default function Yosef_sh(props) {
  const contextOrder = useContext(DataContext); 

async function createHtmlEmail(){
  const data =messageTemplate2(orders.orders)
  //const title="vvvv"
  //const html=renderToString(<CurrentSelections selections={contextOrder.newFakeData.orders} style1={{li:{ 'color':'blue','direction':'rtl' }}}/>)
   // const email="yosef744526@gmail.com"
   // const data= {email,title,html}
    return data
  // return {"email":orders.orders.userEmail,"title":"work!!!","html":"<h1>555 <h2>wertyuioiuytr</h2></h1>"}
}

async function hendleSubmit(){
  const data= await createHtmlEmail()
  // const data={"email":orders.orders.userEmail,"title":"work!!!","html":"<h1>555 <h2>wertyuioiuytr</h2></h1>"}
  axios.post('http://localhost:2023/api/others/sendemail/', data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
}


  return (
    <div>Yosef_sh
      {/* <Payment/> */}
      {/* className, onClick, text, color, width, height, icon  */}
{Button({color:"red",width:100,text:"payment",className:"send-payment",icon:"🎈" ,onClick:()=>{hendleSubmit()} })}
    </div>
  )
}
