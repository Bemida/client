//Fake data

const fakeItemData = {
  categories: [
    { id: 21432, category: "ארון בגדים" },
    { id: 456, category: "מיטה" },
    { id: 7893, category: "ספריה" },
    { id: 2768, category: "שולחן" },
    { id: 435, category: "קונסולה" },
    { id: 123, category: "שידות מגירות" },
  ],
  exterior: {
    handles: {
      name: "ידיות",
      list: [
        {
          description: "ידית כפתור נרקיס",
          img: "🎭",
          id: 321,
        },
        {
          description: "ידית זהב מוברש",
          img: "🥎",
          id: 54,
        },
      ],
    },
    base: {
      name: "בסיס",
      list: [
        {
          description: "רגליים",
          img: "🦵",
          id: 283,
        },
        {
          description: "צוקל",
          img: "🧆",
          id: 12,
        },
      ],
    },
    color: {
      name: "צבע",
      list: [
        {
          description: "אורן",
          img: "🎋",
          id: 45,
        },
        {
          description: "אלון",
          img: "🎄",
          id: 12,
        },
        {
          description: "לבן",
          img: "🥚",
          id: 54,
        },
      ],
    },
  },

  interior: {
    name: "פנימי",
    list: {
      מדפים: 1,
      מגירות: 0,
      מוט: true,
    },
  },
};

const fakeOrderData = {
  user: "John Doe",
  status: "in_progress",
  shipping: "regular",
  furniture: "Closet",
  interiorStyle: {
    color: "red",
    shelves: {
      amount: 3,
      section: 2,
      positions: [1, 2, 3],
    },
    hangingRod: {
      amount: 2,
      section: 1,
      positions: [1, 2],
    },
    drawers: {
      amount: 4,
      section: 3,
      positions: [1, 2, 3, 4],
    },
    drawerHandles: {
      itemNumber: 1234,
      color: "black",
      style: "modern",
      img: "https://example.com/drawer-handle.jpg",
    },
  },
  exteriorStyle: {
    material: "wood",
    doors: { amount: 2 },
    size: { height: 200, width: 100, depth: 50 },
    color: "brown",
    handles: {
      itemNumber: 5678,
      color: "brown",
      style: "classic",
      img: "https://example.com/handle.jpg",
    },
    base: "legs",
  },
  total: 1000,
  isActive: true,
};

const order = {
  stageNo: 1,
  readyToNext: false,
  order: {
  }
}

export default {
  items: fakeItemData,
  orders: fakeOrderData,
  order,
};
