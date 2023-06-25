//Fake data 
const fakeOrderData = {
    user: "John Doe",
    status: "in_progress",
    date: "2023-06-25T12:34:56.789Z",
    shipping: "regular",
    stages: [
      {
        stage: [
          {
            stageNo: 1,
            furniture: "Closet",
            items: [
              {
                item: {
                  name: "Table",
                  itemId: "67890",
                  amount: 1,
                  img: "🪑",
                  price: 100
                }
              }
            ]
          }
        ]
      }
    ],
    total: 150
  }
  


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
            {exterior: {
                material: {type: String, required: true},
                doors: {amount: Number},
                size: {height: Number, width: Number, depth: Number},
                color: {type: String, required: true},
                handles:  {
                    itemNumber: Number,
                    color: String,
                    style: String,
                    img: "🪵"
                },
                base: {
                    default: "legs",
                    enum:["legs", "tzokel"]
                }
    
            }
        }
    ]
}


export default {
    items : fakeItemData,
    orders: fakeOrderData
 
}



