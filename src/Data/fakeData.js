//Fake data 
const fakeOrderData = ({
    user: {
        type: String,
        required: false // for the moment
    },
    status : {
        type : String,
        default : "in_progress",
        enum : ["in_progress","confirmed"]
    },
    date : {
        type : Date,
        default : Date.now
    },
    shipping : {
        type : String,
        default : "regular",
        enum : ["regular","express"]
    },
    stages : [{
        stage : [{
            stageNo : {
                type : Number,
                default : 1 ,
                enum : [1,2,3,4]
            },
            furniture : {
                type : String,
                enum : ["Closet","Bed","Bookcase","Table","Console","Drawers"],
                default : "Closet"
            },
            items : [{
                item: {
                    name : String,
                    itemId : String,
                    amount : Number,
                    img : "url",
                    price : Number
                }
            }]
        }]
    }],
    total: {
        type : Number,
        default : 0
    }
})



const fakeItemData = {
    name: "Product A",
    styling: [
        {
            interior: {
                color: "Red",
                shelves: { amount: 3 },
                drawers: { amount: 2 },
                accessories: {
                    handles: {
                        itemNumber: 123,
                        color: "Silver",
                        style: "Modern",
                        img: "🪵"
                    }
                }
            }
        },
        {
            exterior: {
                material: "Wood",
                size: { height: 180, width: 120, depth: 50 },
                color: "Brown"
            }
        }
    ]
}


export default {
    items : fakeItemData,
    orders: fakeOrderData
 
}

