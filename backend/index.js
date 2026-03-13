const express = require("express");
const mongoose = require("mongoose");
//admin Schema
const fs = require("fs");
const path = require("path");
const Admin = require("./module/adminSchema.js");
//User schema
const User = require("./module/UserSchema.js");
//Order schema
const Order = require("./module/OrderSchema.js");
//product schema
const Product = require("./module/productSchema.js");

require("dotenv").config();
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const jwt = require("jsonwebtoken");
const multer = require("multer");


mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

    //multer

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
          cb(null, Date.now() + '-' + file.originalname);
        }
      });
      
      const upload = multer({ storage: storage });
    


//Admin page login setup    

app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await Admin.create({ username, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})


app.post("/login", async (req, res) => {
    const { username, password } =req.body
    Admin.findOne({ username })
    .then((user) => {
       if(username === user.username && password === user.password){
        const token = jwt.sign({ username},"secretKey",{expiresIn:"1h"});
        res.status(200).json({ token });
       }
       else{
        res.status(400).json({ error: "Invalid credentials" });
       }
    })
    .catch((error) => {
        res.status(400).json({ error: error.message });
    });
})

function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  jwt.verify(token, "secretKey", (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid Token" });
    next();
  });
}

app.get("/admin-data", verifyToken, (req, res) => {
  res.json({ message: "Protected Data" });
});


//User page register setup data

app.post("/user-register", async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const user = await User.create({name, email, password});
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
    
})


//Order connect pandra data

app.post("/orders", async (req, res) => {
  const { name, phone, address } = req.body;

  const newOrder = new Order({
    name,
    phone,
    address,
    userId: "USER" + Date.now()
  });

  await newOrder.save();
  res.json({ message: "Order saved" });
});

app.get("/orders", async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

//product page connect data

app.post("/products", upload.single("image"), async (req, res) => {
    const { name, price } = req.body;
    const image = req.file.path;
  
    const newProduct = new Product({
      image,
      name,
      price
    });
  
    await newProduct.save();
    res.json({ message: "Product saved" });
  });

  app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
  });

  app.delete("/products/:id", async (req, res) => {
    const productId = req.params.id;
    await Product.findByIdAndDelete(productId);
    res.json({ message: "Product deleted" });
  });

app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    });

