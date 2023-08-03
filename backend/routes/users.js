// Import required modules and models
const router = require('express').Router(); // Import Express router
const User = require('../models/User'); // Import User model
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const Post = require('../models/Post'); // Import Post model

// Route for updating a user's information
router.put('/:id', async (req, res) => {
   // Check if the user ID in the request body matches the ID in the route parameter
   if (req.body.userId === req.params.id) {
        // If the request body includes a new password
        if (req.body.password) {
            // Generate a salt and hash the new password
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            // Update the user's information and get the updated user
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true }); 
            res.status(200).json(updatedUser); // Respond with the updated user data       
        } catch (err) {
            res.status(500).json(err); // Handle server error
        }
    } else {
        res.status(401).json("You can only update your own account"); // Unauthorized action
    } 
});

// Route for deleting a user's account
router.delete('/:id', async (req, res) => {
    // Check if the user ID in the request body matches the ID in the route parameter
    if (req.body.userId === req.params.id) {
        try {
            // Find the user by ID
            const user = Post.findById(req.params.id);
            try {
                // Delete all posts associated with the user's username
                await Post.deleteMany({ username: user.username });
                // Delete the user
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted..."); // Respond with success message
            } catch (err) {
                res.status(500).json(err); // Handle server error
            }
        } catch (err) {
            res.status(404).json(err); // Handle user not found error
        }
     } else {
         res.status(401).json("You can only delete your own account"); // Unauthorized action
     } 
 });

// Route for fetching a single user's information
router.get('/:id', async (req, res) => {
    try {
        // Find the user by ID
        const user = await User.findById(req.params.id)
        // Exclude password from user data using destructuring
        const { password, ...others } = user._doc;
        res.status(200).json(others); // Respond with the user data (excluding password)
    } catch(err) {
        res.status(500).json(err); // Handle server error
    }
 });

 

// Export the router for use in other parts of the application
module.exports = router;
