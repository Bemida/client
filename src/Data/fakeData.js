//Fake data 
const fakeOrderData = {
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
    items : fakeOrderData,
 
}