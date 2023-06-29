// argments: orderContext, array of furniture images 
// creator: Haya
//This function returns a string containing HTML and CSS code about the order 
// (selections & details about the client)

//TO DO: 
//not harded code with Michael function.
//need to be changed using real data
//need to be check when we send the email: text and CSS and images.
import CurrentSelections from "../Components/CurrentSelections";
import { renderToString } from 'react-dom/server'

export function messageTemplate2(orderContext, imagesArr) {


   // <CurrentSelections selections={contextOrder.newFakeData.orders} style1={{li:{ 'color':'blue','direction':'rtl' }}}/>

//debugger;
const msgFromObj=renderToString(<CurrentSelections selections={orderContext} style={{ul:{ 'direction':'rtl','list-style-type':'none' , 'font-size': '20px', 'margin':'0px', 'padding':'0px'}}}/>);
       // const msgFromObj=renderToString(<CurrentSelections selections={orderContext}/>); 
    const msg =
        ` 

<body style="direction:rtl;margin:5px">
<div>
    <p style="font-weight: 600; font-size: 20px;">
        איזה כיף!
        <br>
        ההזמנה שלך התקבלה אצלנו בנגריה
    </p>

    <h2>הארון שלך </h2>
    <hr width="70%" align="right"; color:"blue">
   ${msgFromObj}
    <h2>סה"כ לתשלום :${orderContext.total} ש"ח</h2>

    <h2>חזית הארון</h2>
    <img style="width=150px; height=150px;" src= alt='furniture outside' />
    <h2>פנים הארון</h2>
    <img style="width=150px; height=150px;" src= alt='furniture inside'/>
    <h2>הפרטים שלך</h2>
    
    <hr width="70%" align="right">
   
    <p class="orderDetails">
        <strong>שם :</strong> ${orderContext.userName}
    </p>
    <p class="orderDetails">
        <strong>מייל :</strong> ${orderContext.userEmail}
    </p>
    <p class="orderDetails">
        <strong>טלפון :</strong> ${orderContext.userPhone}
    </p>
    <p class="orderDetails">
        <strong>כתובת למשלוח :</strong> 4 דלתות
    </p>
</div>
</body>

</html>`
//let x=renderToString(<CurrentSelections selections={contextOrder.newFakeData.orders}/>) ;
//console.log(x)
    return { email: orderContext.userEmail, title: 'אישור הזמנה', html: msg };
}