//Fake data

const fakeItemData = {
    categories: [
        { id: 21432, category: "ארון בגדים", isAvailable: true },
        { id: 456, category: "מיטה", isAvailable: false },
        { id: 7893, category: "ספריה", isAvailable: false },
        { id: 2768, category: "שולחן", isAvailable: false },
        { id: 435, category: "קונסולה", isAvailable: false },
        { id: 123, category: "שידות מגירות", isAvailable: false },
    ],
    exterior: {
        handles: {
            name: "ידיות",
            key: "handleId",
            list: [
                {
                    description: "ידית כפתור נרקיס",
                    img: "https://s3.img-b.com/image/private/t_base,c_lpad,f_auto,dpr_auto,w_90,h_90/product/signaturehardware/signature-hardware-462362-8796197.jpg",
                    id: 321,
                },
                {
                    description: "ידית זהב מוברש",
                    img: "https://s3.img-b.com/image/private/t_base,c_lpad,f_auto,dpr_auto,w_90,h_90/product/signaturehardware/signature-hardware-462362-8796197.jpg",
                    id: 54,
                },
            ],
        },
        base: {
            name: "בסיס",
            key: "base",
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
            key: "color",
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
        section1: {
            name: "עמודה ימין",
            key: "section1",
            list: {
                shelves: {
                    name: "מדפים",
                    key: "shelves",
                    type: "number"
                },
                hangingRod: {
                    name: "מוט תלייה",
                    key: "hangingRod",
                    type: "boolean"
                }
            }
        },
        section2: {
            name: "עמודה שמאל",
            key: "section2",
            list: {
                shelves: {
                    name: "מדפים",
                    key: "shelves",
                    type: "number"
                },
                hangingRod: {
                    name: "מוט תלייה",
                    key: "hangingRod",
                    type: "boolean"
                }
            }
        }
    },
};

const fakeOrderData = {

    userName: "John Doe",
    userPhone: "082345678",
    userEmail: "test@test.com",

    status: "in_progress",
    shipping: "regular",
    furniture: "Closet",
    color: "red",
    section1: {
        shelves: 3,
        hangingRod: true,
        drawers: 4,
    },
    section2: {
        shelves: 2,
        hangingRod: true,
        drawers: 2,
    },
    sections: [{
        shelves: 4,
        hangingRod: true,
        drawers: 0,
    },
    {
        shelves: 2,
        // hangingRod: 0,
        drawers: 4,
    },
    {
        shelves: 1,
        hangingRod: true,
        drawers: 2,
    }],
    material: "wood",
    height: 200,
    width: 200,
    depth: 50,
    doors: 5,
    color: "brown",
    handleId: "5678",
    stageNo: 5,
    base: "legs",
    total: 1000,
};

const emptyFakeOrderData = {

    userName: null,
    userPhone: null,
    userEmail: null,

    status: null,
    shipping: null,
    furniture: null,
    color: null,
    section1: {
        shelves: 0,
        hangingRod: true,
        drawers: 0,
    },
    section2: {
        shelves: 0,
        hangingRod: true,
        drawers: 0,
    },
    sections: [{
        shelves: 4,
        hangingRod: true,
        drawers: 0,
    },
    {
        shelves: 2,
        // hangingRod: 0,
        drawers: 4,
    },
    {
        shelves: 1,
        hangingRod: true,
        drawers: 2,
    }],
    material: null,
    height: 0,
    width: 0,
    depth: 0,
    doors: 0,
    color: null,
    handleId: null,
    stageNo: 1,
    base: null,
    total: 0,
};

const order = {
    readyToNext: false,
    order: {},
};

export default {
    items: fakeItemData,
    orders: fakeOrderData,
    order,
    emptyOrderData: emptyFakeOrderData,
};
