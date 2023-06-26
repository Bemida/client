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
  categories: [
    { id: 21432, category: "ארון בגדים" },
    { id: 456, category: "מיטה" },
    { id: 7893, category: "ספריה" },
    { id: 2768, category: "שולחן" },
    { id: 435, category: "קונסולה" },
    { id: 123, category: "שידות מגירות" }],
  חיצוני: {
    ידיות: [{
      description: "ידית כפתור נרקיס",
      img: "🎭",
      id: 321
    }, {
      description: "ידית זהב מוברש",
      img: "🥎",
      id: 54
    },
    ],
    בסיס: [{
      description: "רגליים",
      img: "🦵",
      id: 283
    }, {
      description: "צוקל",
      img: "🧆",
      id: 12
    }],
    צבע: [{
      description: "אורן",
      img: "🎋",
      id: 45
    }, {
      description: "אלון",
      img: "🎄",
      id: 12
    }, {
      description: "לבן",
      img: "🥚",
      id: 54
    }]
  },
  פנימי: {
   מדפים: 1,
    מגירות: 0,
    מוט: true
  }
}

export default {
  items: fakeItemData,
  orders: fakeOrderData
}

