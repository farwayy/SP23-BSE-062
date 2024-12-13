const express = require("express")
const app = express()
const cors = require('cors');
app.use(express.json())
app.use(cors())
// const { users } = require("./home.js");
app.get("/", (req, res) => {
    res.send("Server is running!");
});
let users = []; // Initially empty or you can preload with some data
// Route to register a user
app.post("/register", (req, res) => {
    const { fullname, email, password, phone, address } = req.body;
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: "User already exists!" });
    }

    const newUser = { fullname, email, password, phone, address };
    users.push(newUser);
    res.status(201).json({ message: "User registered successfully!" });
});
app.get("/register", (req, res) => {
    res.send(users);
})
// Server setup
app.listen(3000, function () {
    console.log("Server is running on http://localhost:3000");
});
