import { useContext } from 'react'
import Button from '../Components/Button'
import axios from 'axios';
import {DataContext} from '../Context/MainContext'
import { messageTemplate } from '../Data/messageTemplate';
import styles from './style.module.css'




export default function Button_Payment(props) {
  const {newFakeData}= useContext(DataContext)
  
  async function createHtmlEmail(){
    const data ={email:messageTemplate(newFakeData.orders),createorder:newFakeData.orders}
    return data
  }
  
  async function hendleSubmit(){
  const data= await createHtmlEmail()
  axios.post('http://localhost:2023/api/orders/addorder/', data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
}


  return (
    <div >Yosef_sh
{Button({color:"red",width:100,text:"payment",className:"send-payment",icon:"🎈" ,onClick:()=>{hendleSubmit()} })}
    </div>
  )
}
