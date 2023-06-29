
import axios from 'axios';
import styles from './style.module.css'
import { DataContext } from '../../Context/MainContext';
import { useContext } from 'react';
import { messageTemplate } from '../../Data/messageTemplate';
import Button from '../Button';




export default function Button_Payment(props) {
  const { fullOrder } = useContext(DataContext)

  async function createHtmlEmail() {
    const allData= {...fullOrder, userPhone:props.value.userPhone,userEmail:props.value.userEmail,userName:props.value.userName}
    const data = { email: messageTemplate(allData), createorder: allData }
    return data
  }

  async function hendleSubmit() {
    const data = await createHtmlEmail()
    axios.post('http://localhost:2023/api/orders/addorder/', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }


  return (
    <div >
      {Button({ color: "#C2A39A", width: 100, text: "payment", className: "send-payment", icon: "🎈", onClick: () => { hendleSubmit() } })}
    </div>
  )
}
