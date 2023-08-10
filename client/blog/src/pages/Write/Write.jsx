// Import required modules and styles
import React, { useContext, useState } from 'react';
import './write.scss';
import axios from 'axios';
import { Context } from '../../context/Context';

// Define the Write component
const Write = () => {
    // State variables to manage form inputs and user context
    const [title, setTitle] = useState(""); // State for title input
    const [desc, setDesc] = useState("");   // State for description input
    const [file, setFile] = useState(null); // State for selected file
    const { user } = useContext(Context);    // Access user context

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form behavior

        // Create a new post object with user data and inputs
        const newPost = {
            username: user.username,
            title,
            desc,
        };

        if (file) { // Check if a file is selected
            const data = new FormData(); // Create a FormData object
            const filename = Date.now() + file.name; // Generate a unique filename
            data.append("name", filename); // Add filename to FormData
            data.append("file", file);     // Add file to FormData
            newPost.photo = filename;      // Set photo property in newPost

            try {
                // Upload the file using Axios to a specific endpoint
                await axios.post("/api/upload", data);
                console.log(data); // Log the FormData for debugging
            } catch (err) {
                // Handle error if file upload fails
            }
        }

        try {
            // Create a new post using Axios and redirect after success
            const res = await axios.post('/api/posts', newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) {
            // Handle error if post creation fails
        }
    };

    // Render the Write component
    return (
        <div className='write'>
            {/* Display the selected file as an image */}
            {file && 
                <img 
                    src={URL.createObjectURL(file)}
                    alt="" 
                    className="writeImg"
                />
            }

            {/* Form for submitting a new post */}
            <form className="writeForm" onSubmit={handleSubmit}>
                {/* Input for selecting a file */}
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input 
                        type="file" 
                        id="fileInput" 
                        style={{display: "none"}} 
                        onChange={(e) => setFile(e.target.files[0])} // Update selected file
                    />
                    <input 
                        type="text" 
                        placeholder='Title' 
                        className='writeInput' 
                        autoFocus={true} 
                        onChange={(e) => setTitle(e.target.value)} // Update title state
                    />
                </div>
                
                {/* Text area for the post content */}
                <div className="writeFormGroup">
                    <textarea 
                        placeholder='Tell your story...' 
                        type="text" 
                        className='writeInput writeText' 
                        onChange={(e) => setDesc(e.target.value)} // Update description state
                    ></textarea>
                </div>
                
                {/* Submit button */}
                <button className="writeSubmit" type='submit'>Publish</button>
            </form>
        </div>
    );
}

// Export the Write component
export default Write;
