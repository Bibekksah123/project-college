const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality noise-canceling wireless headphones.",
    price: 99.99,
    category: "Electronics",
    image:
      " https://th.bing.com/th/id/R.af5fc9509f3cca164067feae0cb2a128?rik=Tbg0xwIm2ZCx%2bg&riu=http%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2500x2500%2fskullcandy_s6hbgy_374_hesh_2_bluetooth_headphones_1085703.jpg&ehk=OCzPUYs%2bWvh6P2T8Fm8I3klJEdhDte8vicI%2bH9ryqeg%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest model smartphone with advanced features.",
    price: 699.99,
    category: "Electronics",
    image:
      "https://th.bing.com/th/id/OIP.3lmy8g2U26AUkramSCxUhwHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    name: "Gaming Laptop",
    description: "Powerful gaming laptop with RGB keyboard.",
    price: 1299.99,
    category: "Electronics",
    image:
      "https://th.bing.com/th/id/OIP.BoQcU0vGBLMwj9nPaiacowHaEK?rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    name: "Running Shoes",
    description: "Comfortable and lightweight running shoes.",
    price: 59.99,
    category: "Fashion",
    image:
      "https://th.bing.com/th/id/OIP.vDxE_ncniIFkc2wOyCxZogHaE8?rs=1&pid=ImgDetMain",
  },
  {
    id: 5,
    name: "Smartwatch",
    description: "Track your health and fitness goals.",
    price: 199.99,
    category: "Accessories",
    image:
      "https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    description: "Portable speaker with excellent sound quality.",
    price: 49.99,
    category: "Electronics",
    image:
      "https://th.bing.com/th/id/OIP.kKH9gUFJXzyOkJB5ImoSdAHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 7,
    name: "Leather Wallet",
    description: "Premium leather wallet with multiple card slots.",
    price: 29.99,
    category: "Accessories",
    image:
      "https://th.bing.com/th/id/OIP.OxBPG6HcyX0lPpWyqbC3cQHaJ4?rs=1&pid=ImgDetMain",
  },
  {
    id: 8,
    name: "Fitness Tracker",
    description: "Monitor your steps, heart rate, and sleep patterns.",
    price: 89.99,
    category: "Accessories",
    image:
      "https://th.bing.com/th/id/OIP._XznxX-x9hkAudNjgh8MJgHaLH?rs=1&pid=ImgDetMain",
  },
  {
    id: 9,
    name: "4K TV",
    description: "Ultra HD smart TV for immersive entertainment.",
    price: 599.99,
    category: "Electronics",
    image:
      "https://th.bing.com/th/id/OIP.6afWCClkPUuz0kCdlOdMpAHaEK?rs=1&pid=ImgDetMain",
  },
  {
    id: 10,
    name: "Backpack",
    description: "Durable and spacious backpack for all your needs.",
    price: 39.99,
    category: "Fashion",
    image:
      "https://th.bing.com/th/id/OIP.U2xzILfXAk7Nzl9qoEdgigHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 11,
    name: "Coffee Maker",
    description: "Brew the perfect cup of coffee every morning.",
    price: 79.99,
    category: "Home Appliances",
    image:
      "https://i5.walmartimages.com/asr/16f77040-27ab-4008-9852-59c900d7a7d9_1.c524f1d9c465e122596bf65f939c8d26.jpeg",
  },
  {
    id: 12,
    name: "Sunglasses",
    description: "Stylish sunglasses with UV protection.",
    price: 19.99,
    category: "Fashion",
    image:
      "https://th.bing.com/th/id/OIP.V09No6EOyI47zrFHMBoDKgAAAA?rs=1&pid=ImgDetMain",
  },
  {
    id: 13,
    name: "Office Chair",
    description: "Ergonomic chair for long hours of work or gaming.",
    price: 129.99,
    category: "Furniture",
    image:
      "https://th.bing.com/th/id/OIP.n293WT-r5Vwr4VvfJ4GnDQHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 14,
    name: "Cooking Pan Set",
    description: "Non-stick cooking pan set for your kitchen.",
    price: 49.99,
    category: "Kitchenware",
    image:
      "https://i5.walmartimages.com/asr/05f690f5-3b32-445a-a3d3-211617841452_1.9292fe791fc75e08762e931f97940e5c.jpeg",
  },
  {
    id: 15,
    name: "Electric Kettle",
    description: "Fast-boiling kettle for your tea and coffee needs.",
    price: 29.99,
    category: "Home Appliances",
    image:
      "https://th.bing.com/th/id/R.b9ff9d494828588247f15c1f710b885d?rik=Wb0Z8u5SVaR%2fTQ&pid=ImgRaw&r=0",
  },
  {
    id: 16,
    name: "Desk Lamp",
    description: "Adjustable desk lamp with LED light.",
    price: 24.99,
    category: "Home Decor",
    image:
      "https://th.bing.com/th/id/OIP.njgZ53qxx2zSy0kOFeYdKgHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 17,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse for smooth navigation.",
    price: 14.99,
    category: "Accessories",
    image:
      "https://th.bing.com/th/id/OIP.yNGxmU6UuhI-oQpvK8Z8lAHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 18,
    name: "Yoga Mat",
    description: "Eco-friendly yoga mat for your workouts.",
    price: 19.99,
    category: "Fitness",
    image:
      "https://th.bing.com/th/id/OIP.xZivnhLOBvhYrblYtfWC_wHaE8?rs=1&pid=ImgDetMain",
  },
  {
    id: 19,
    name: "Bookshelf",
    description: "Modern wooden bookshelf for your home or office.",
    price: 149.99,
    category: "Furniture",
    image:
      "https://th.bing.com/th/id/OIP.oxJPwL0hv04koPFSlgEPvAHaFj?rs=1&pid=ImgDetMain",
  },
  {
    id: 20,
    name: "Action Camera",
    description: "Capture your adventures in stunning 4K quality.",
    price: 249.99,
    category: "Electronics",
    image:
      "https://th.bing.com/th/id/OIP.79GTOolhlJFi_MFusPFPhwHaHa?rs=1&pid=ImgDetMain",
  },
];
