// argments: orderContext, array of furniture images 
// creator: Haya
//This function returns a string containing HTML and CSS code about the order 
// (selections & details about the client)

//TO DO: 
//not harded code with Michael function.
//need to be changed using real data
//need to be check when we send the email: text and CSS and images.
import CurrentSelections from "../Components/CurrentSelections";
export function messageTemplate(orderContext, imagesArr) {
    const msg =
        ` <head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Email</title>
<style>
    body {
        direction: rtl;
        margin: 5px;
    }

    .receipt {
        font-weight: 600;
        font-size: 20px;
    }

    .em {
        font-weight: 900;
    }

    .orderDetails {
        padding: 3px;
    }

    p {
        padding: 3px;
        margin: 0px;
    }
    img{
        width=150px;
        height=150px;
    }
    .underlined{
        border-bottom:black 2px black;
    }
</style>
</head>

<body>
<div>
    <p class="receipt">
        איזה כיף!
        <br>
        ההזמנה שלך התקבלה אצלנו בנגריה
    </p>

    <h2 class='underlined'>הארון שלך </h2>
    <div>
        <p class="orderDetails">
            <strong>מידות הארון:</strong> רוחב ${orderContext.width} ס"ם גובה ${orderContext.height} ס"מ עומק ${orderContext.depth} ס"מ
        </p>
        <p class="orderDetails">
            <strong>דלתות:</strong> ${orderContext.doors} דלתות
        </p>
        <p class="orderDetails">
            <strong>פרזול:</strong> ${orderContext.handleId}
        </p>
        <p class="orderDetails">
            <strong>בסיס הארון:</strong> ${orderContext.base}
        </p>
        <p class="orderDetails">
            <strong>צבע חוץ :</strong> ${orderContext.color}
        </p>
        <p class="orderDetails">
            <strong>חלק 1:</strong>
        </p>
        <p class="orderDetails">
            <strong>מדפים :</strong> ${orderContext.section1.shelves}
        </p>
        <p class="orderDetails">
            <strong>תליה :</strong> ${orderContext.section1.hangingRod ? 'עם תליה' : 'ללא תליה'}
        </p>
        <p class="orderDetails">
            <strong>חלק 2:</strong>
        </p>
        <p class="orderDetails">
            <strong>מדפים :</strong> ${orderContext.section2.shelves}
        </p>
        <p class="orderDetails">
            <strong>תליה :</strong> ${orderContext.section2.hangingRod ? 'yes' : 'no'}
        </p>
    </div>
    <h2>סה"כ לתשלום :${orderContext.total} ש"ח</h2>

    <h2>חזית הארון</h2>
    <h2>פנים הארון</h2>
    <h2 class='underlined'>הפרטים שלך</h2>
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
    return { email: orderContext.userEmail, title: 'אישור הזמנה', html: msg };
}