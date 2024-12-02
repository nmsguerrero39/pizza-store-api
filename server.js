const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample Data
const pizza = [
  {
    id: 1,
    name: "Pizza Margherita",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    size: {
      one: 25,
      two: 30,
      three: 42,
    },
    price: 10000,
    image: "../src/assets/images/dish/pizza-1.png",
  },
  {
    id: 2,
    name: "Pizza Pepperoni",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    size: {
      one: 25,
      two: 30,
      three: 42,
    },
    price: 12000,
    image: "../src/assets/images/dish/pizza-1.png",
  },
  {
    id: 3,
    name: "Veggie Pizza",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    size: {
      one: 25,
      two: 30,
      three: 42,
    },
    price: 8000,
    image: "../src/assets/images/dish/pizza-1.png",
  },
  {
    id: 4,
    name: "BBQ Chicken Pizza",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    size: {
      one: 25,
      two: 30,
      three: 42,
    },
    price: 15000,
    image: "../src/assets/images/dish/pizza-1.png",
  },
  {
    id: 5,
    name: "Hawaiian Pizza",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    size: {
      one: 25,
      two: 30,
      three: 42,
    },
    price: 11000,
    image: "../src/assets/images/dish/pizza-1.png",
  },
  {
    id: 6,
    name: "Meat Lover's Pizza",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    size: {
      one: 25,
      two: 30,
      three: 42,
    },
    price: 13000,
    image: "../src/assets/images/dish/pizza-1.png",
  },
];

// Routes
app.get("/api/pizza", (req, res) => {
  res.json(pizza);
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
