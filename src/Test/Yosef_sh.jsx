import React from 'react'
import Button from '../Components/Button'
import Payment from '../Components/Payment'
import axios from 'axios';
import orders from '../Data/fakeDataTest'


export default function Yosef_sh(props) {

async function createHtmlEmail(){
  return {"email":orders.orders.userEmail,"title":"work!!!","html":"<h1>555 <h2>wertyuioiuytr</h2></h1>"}
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
      <Payment/>
      {/* className, onClick, text, color, width, height, icon  */}
{Button({color:"red",width:100,text:"payment",className:"send-payment",icon:"🎈" ,onClick:()=>{hendleSubmit()} })}
    </div>
  )
}
