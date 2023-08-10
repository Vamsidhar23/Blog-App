const express = require('express'); 
const mongoose = require('mongoose'); // Import Mongoose for MongoDB interaction
const { Schema, model } = require('mongoose'); 
const { config } = require('dotenv'); // Import the dotenv library for environment variables
const authRoute = require('./routes/auth') // Import authentication route
const usersRoute = require('./routes/users'); // Import users route
const postsRoute = require('./routes/posts'); // Import posts route
const categoriesRoute = require('./routes/categories'); // Import categories route
const multer = require('multer'); // Import Multer for file uploads
const path = require('path');
const cors = require('cors');

config(); // Load environment variables from .env file

const app = express(); 

app.use(cors());

app.use(express.json()); // Use the built-in middleware to parse JSON requests

app.use("/images", express.static(path.join(__dirname,'/images' ))) //serve static files, specifically images, from a designated directory. 

// Connection to MongoDB
mongoose.connect(process.env.mongodb_url, {
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
    },
    serverSelectionTimeoutMS: 30000
}).then(console.log("Connected to MongoDB")) // Connect to MongoDB
.catch((err) => console.log(err)); // Handle connection error

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images"); // Specify the destination directory for uploaded files
    },
    filename: (req, file, cb) =>{
        cb(null, req.body.name); // Specify the filename for uploaded files
    }
});

const upload = multer({storage: storage}); // Configure multer for file uploads
app.post('/api/upload', upload.single("file"), (req,res) => {
    res.status(200).json("File has been uploaded successfully"); // Respond after file upload
});

app.use('/api/auth', authRoute); // Set up the authentication route

app.use('/api/users', usersRoute); // Set up the users route

app.use('/api/posts', postsRoute); // Set up the posts route

app.use('/api/categories', categoriesRoute); // Set up the categories route

app.use('/', (req, res) => {
    res.send('<h1> Connect to mongoDB Atlas'); 
});

const PORT = 5000; 

app.listen(PORT, async () => {
    console.log('Backend is running successfully'); // Start the server and log a success message
});
