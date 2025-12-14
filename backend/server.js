const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/User");
const Order = require("./models/Order");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Server is working!");
});
  
// ----- LOGIN ----------------
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ username });

        if (!existingUser) {
            return res.json({ message: "User Not Found" });
        }

        if (existingUser.password !== password) {
            return res.json({ message: "Wrong Password" });
        }

        return res.json({ message: "Login Successful", user: existingUser });

    } catch (err) {
        console.log("Login Error:", err);
        return res.json({ message: "Server Error" });
    }
});

// -- SIGNUP -----------
app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.json({ message: "All fields are required" });
        }

        const userExists = await User.findOne({ username });

        if (userExists) {
            return res.json({ message: "Username already taken" });
        }

        const newUser = new User({
            username,
            email,
            password
        });

        await newUser.save();

        return res.json({ message: "Signup Successful", user: newUser });

    } catch (err) {
        console.log("Signup Error:", err);
        return res.json({ message: "Server Error" });
    }
});

// ------ PLACE ORDER -----------
app.post('/placeorder', async (req, res) => {
    try {
        console.log("Received Order Body:", req.body);

        const {
            name,
            email,
            phone,
            address,
            ram,
            storage,
            color,
            payment,
            price,
            productName
        } = req.body;

        const order = new Order({
            name,
            email,
            phone,
            address,
            ram,
            storage,
            color,
            payment,
            price,
            productName
        });

        await order.save();
        return res.json({ message: "Order Saved Successfully" });

    } catch (err) {
        console.log("Mongo Save Error:", err);
        return res.json({ message: "Error saving order" });
    }
});

// -- DATABASE & START SERVER -------
mongoose.connect("mongodb://127.0.0.1:27017/authdb")
    .then(() => {
        console.log("MongoDB Database Connected");

        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch(err => console.log("MongoDB Connection Error:", err));
