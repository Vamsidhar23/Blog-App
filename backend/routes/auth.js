const router = require("express").Router(); // Import the Express router
const User = require('../models/User'); // Import the User model
const bcrypt = require('bcrypt'); // Import the bcrypt library for password hashing or encryption

// Register Route
router.post('/register', async (req, res) => { // Define a route for user registration
    try {
        const salt = await bcrypt.genSalt(10); // Generate a salt for password hashing
        const hashEncrypt = await bcrypt.hash(req.body.password, salt); // Hash the password using the salt

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashEncrypt,
        }); // Create a new User object with hashed password

        const user = await newUser.save(); // Save the new user to the database
        res.status(200).json(user); // Respond with the saved user data

    } catch (err) {
        res.status(500).json(err); // If an error occurs, respond with a server error status
    }
})

// Login Route
router.post('/login', async (req, res) => { // Define a route for user login
    try {
        const exisitingUser = await User.findOne({
            username: req.body.username
        }); // Find a user by their username

        !exisitingUser && res.status(400).json("Wrong credentials!!!"); // If user doesn't exist, respond with a bad request status

        const validate = await bcrypt.compare(
            req.body.password,
            exisitingUser.password
        ); // Compare provided password with hashed password

        !validate && res.status(400).json("Wrong credential!!!"); // If password is incorrect, respond with a bad request status

        const { password, ...others } = exisitingUser._doc; // Destructure user document, excluding the password
        res.status(200).json(others); // Respond with the user document excluding password

    } catch (err) {
        res.status(500).json(err); // If an error occurs, respond with a server error status
    }
})

module.exports = router; // Export the router for use in other parts of the application
