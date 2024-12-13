const users = []; // Stores user objects
document.getElementById("RegisterButton").addEventListener("click",
    async function (event) {
        event.preventDefault(); // Prevent the form from reloading the page

        // Retrieve values from input fields
        const fullname = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
 try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullname, email, password, phone, address })
        });
        if (response.ok) {
            alert("User registered successfully!");
        } else {
            alert("Registration failed!");
        }
    } catch (error) {
        console.error("Error:", error);
    }
    });



// function registerCustomer(fullname, email, password, phone, address) {
//     const existingUser = users.find(user => user.name === fullname);//checks if its already registered
//     if (existingUser) {
//         throw new Error("User already exists!");
//         alert("this user is already registered");
//     }
//     const newUser = {
//         fullname,
//         password,
//         address,
//         email,
//         phone,
//         cart: [],
//         purchaseHistory: [],
//         notifications: [],
//         query: []
//     };
//     users.push(newUser)
//     alert("User registered successfully!")
//     console.log(users)

//     return newUser;
// }
// function getAllUsers(){
//     return users
// }
// module.exports = { users,getAllUsers };