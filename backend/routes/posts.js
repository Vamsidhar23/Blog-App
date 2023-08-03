const router = require('express').Router(); 
const User = require('../models/User'); 
const Post = require('../models/Post'); 


// This route is for creating posts.
router.post('/', async (req, res) => {
    // Create a new Post instance with the request body
    const newPost = new Post(req.body);
    try {
        // Save the new post to the database
        const savePost = await newPost.save();
        res.status(200).send(savePost); // Respond with the saved post
    } catch(err) {
        res.status(500).json(err); // Handle server error
    }
});

// This route is for updating posts.
router.put('/:id', async(req,res) => {
    try {
        // Find the post by ID
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username) {
            try {
                // Update the post and get the updated version
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, { new: true });
                res.status(200).json(updatedPost); // Respond with the updated post
            } catch(err) {
                res.status(500).json(err); // Handle server error
            }
        } else {
            res.status(401).json("You can only update your post!"); // Unauthorized action
        }
    } catch(err) {
        res.status(500).json(err); // Handle server error
    }
});

// This route is for deleting a post 
router.delete('/:id', async(req,res) => {
    try {
        // Find the post by ID
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username) {
            try {
                // Delete the post
                await Post.findByIdAndDelete(req.params.id);
                res.status(200).json("Post has been deleted"); // Respond with success message
            } catch(err) {
                res.status(500).json(err); // Handle server error
            }
        } else {
            res.status(401).json("You can only delete your post!"); // Unauthorized action
        }
    } catch(err) {
        res.status(500).json(err); // Handle server error
    }
});

// Route for fetching a single post information
router.get('/:id', async (req, res) => {
    try {
        // Find the post by ID
        const post = await Post.findById(req.params.id);
        res.status(200).json(post); // Respond with the post data
    } catch(err) {
        res.status(500).json(err); // Handle server error
    }
});

// This route is for fetching all posts information
router.get('/', async (req, res) => {
    // Extract query parameters from the request
    const username = req.query.user; // Extract the 'user' query parameter
    const categoryName = req.query.catName; // Extract the 'catName' query parameter

    try {
        let posts; // Declare a variable to store the fetched posts
        if(username) {
            // Fetch posts associated with a specific username
            posts = await Post.findOne({ username: username }); 
        } else if(categoryName) {
            // Fetch posts that belong to a specific category
            posts = await Post.findOne({
                categories: {
                    $in: [categoryName],  // Using "$in" to match posts in the provided category
                },
            });
        } else {
            // Fetch all posts
            posts = await Post.find(); 
        }
        res.status(200).json(posts); // Respond with the fetched posts
    } catch(err) {
        res.status(500).json(err); // Handle server error
    }
});


module.exports = router;
