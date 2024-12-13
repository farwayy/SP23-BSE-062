// // home.js

// // Array to store user data
// let users = [];

// Event listener for the Register button
document.getElementById("RegisterButton").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve values from input fields
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    // Validate passwords
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
   registerCustomer(username,password,address,email,phone)
    alert("User registered successfully!");
});
// Example Data Structures
const users = []; // Stores user objects
const items = []; // Stores item objects
function registerCustomer(name, password, address, email,phone) {
    const existingUser = users.find(user => user.name === name);
    if (existingUser) {
        throw new Error("User already exists!");
        alert("this user is already registered");
    }
    const newUser = {
        name,
        password,
        address,
        email,
        phone,
        cart: [],
        purchaseHistory: []
    };
    users.push(newUser);
    return newUser;
}
function loginCustomer(name, password) {
    const user = users.find(user => user.name === name && user.password === password);
    if (!user) {
        throw new Error("Invalid credentials!");
        alert("Register first , User do not exist");
    }
    return user;
}
function addItem(name, price) {
    const itemID = items.length + 1; // Auto-incrementing ID
    const newItem = { itemID, name, price };
    items.push(newItem);
    return newItem;
}
function addItemToCart(user, itemID, quantity) {
    const existingItem = user.cart.find(item => item.itemID === itemID);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        user.cart.push({ itemID, quantity });
    }
}

function removeItemFromCart(user, itemID) {
    user.cart = user.cart.filter(item => item.itemID !== itemID);
}

function incrementItemQuantity(user, itemID) {
    const item = user.cart.find(item => item.itemID === itemID);
    if (item) item.quantity += 1;
}

function decrementItemQuantity(user, itemID) {
    const item = user.cart.find(item => item.itemID === itemID);
    if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) removeItemFromCart(user, itemID);
    }
}

function viewCart(user) {
    return user.cart.map(cartItem => {
        const item = items.find(item => item.itemID === cartItem.itemID);
        return {
            itemName: item.name,
            price: item.price,
            quantity: cartItem.quantity,
            total: item.price * cartItem.quantity
        };
    });
}
function placeOrder(user) {
    user.purchaseHistory.push(...user.cart);
    user.cart = []; // Clear the cart after placing the order
}

function viewPurchaseHistory(user) {
    return user.purchaseHistory.map(orderItem => {
        const item = items.find(item => item.itemID === orderItem.itemID);
        return {
            itemName: item.name,
            quantity: orderItem.quantity,
            total: item.price * orderItem.quantity
        };
    });
}
function placeOrder(user) {
    user.purchaseHistory.push(...user.cart);
    user.cart = []; // Clear the cart after placing the order
}

function viewPurchaseHistory(user) {
    return user.purchaseHistory.map(orderItem => {
        const item = items.find(item => item.itemID === orderItem.itemID);
        return {
            itemName: item.name,
            quantity: orderItem.quantity,
            total: item.price * orderItem.quantity
        };
    });
}
const alice = registerCustomer("Alice", "password123", "123 Street", "alice@example.com");
const bob = registerCustomer("Bob", "password456", "456 Avenue", "bob@example.com");

const loggedInUser = loginCustomer("Alice", "password123");
console.log(`Welcome, ${loggedInUser.name}`);
// Add items to cart
addItemToCart(loggedInUser, 1, 2); // Add 2 Pizzas
addItemToCart(loggedInUser, 2, 1); // Add 1 Burger
console.log("Cart:", viewCart(loggedInUser));

// Increment and decrement item quantities
incrementItemQuantity(loggedInUser, 1); // Add 1 more Pizza
decrementItemQuantity(loggedInUser, 2); // Remove 1 Burger
console.log("Updated Cart:", viewCart(loggedInUser));

// Place an order
placeOrder(loggedInUser);
console.log("Purchase History:", viewPurchaseHistory(loggedInUser));
console.log("Cart after order:", viewCart(loggedInUser));

