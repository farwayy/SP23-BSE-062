// Register a new user (POST request)
app.post("/api/register", (req, res) => {
    const { fullname, email, password, phone, address } = req.body;
    // Check if user already exists
    const existingUser = users.find(user => user.fullname === fullname);
    if (existingUser) {
        return res.status(400).json({ error: "User already exists!" });
    }
    // Create a new user object
    const newUser = {
        fullname,
        email,
        password,
        phone,
        address,
        cart: [],
        purchaseHistory: [],
        notifications: [],
        query: []
    };
    users.push(newUser);
    alert("User registered successfully!")
    console.log(users)
    res.status(201).json({ message: "User registered successfully!", user: newUser });
});

// Get all users (GET request)
app.get("/api/users", (req, res) => {
    res.json(users);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
