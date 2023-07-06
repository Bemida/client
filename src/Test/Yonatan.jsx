import {useState, useEffect} from "react" 
import axios from "axios"
import orders from '../Data/fakeDataTest'

export default function Yonatan() {
  /*yonatan*/ 
  const fakeOrderData = orders.orders
    const [finalPayment, setFinalPayment] = useState()
   useEffect(() => {
     // if the page is 5?
     axios.post("http://localhost:2023/api/payment", fakeOrderData)
     .then((res) => {
       setFinalPayment(res.data)
       console.log(res.data)
     })
       .catch(err => console.log(err))
   },[])
    /*yonatn*/
       return (
         <div> 
          afdhafdhasdh
 </div>
  )
}
