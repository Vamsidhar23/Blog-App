import React, { useContext, useState } from 'react'
import './setting.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Context } from '../../context/Context'
import axios from 'axios';

const Setting = () => {

    const {user, dispatch} = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [success, setSuccess] = useState(false);

    
    const PF = "http://localhost:5000/images/"

        const handleUpdate = async (e) => {
            e.preventDefault();
            dispatch({type:"UPDATE_START"});
            const updatedUser = {
                userId:user._id,
                username,
                email,
                password,
            };
    
            if (file) { 
                const data = new FormData(); 
                const filename = Date.now() + file.name; 
                data.append("name", filename); 
                data.append("file", file);    
                updatedUser.profilePic = filename;     

                try {
                    await axios.post("/api/upload", data);
                } catch (err) {
                }
            }
            
            try {
                const res = await axios.put('/api/users/' + user._id, updatedUser);
                setSuccess(true);
                console.log(success);
                dispatch({type:"UPDATE_SUCCESS", payload: res.data});

                
               
            } catch (err) {
                 setSuccess(false);
                 dispatch({type:"UPDATE_FAILURE"});

             }
        };
    
        const handleClick = async () => {
            try{
                const res = await axios.delete('/api/users/'+user._id,user._id);

                    dispatch({type:"DELETE_USER"});
                    window.location.replace('/register');

            }catch (err) {

            }
        }

  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle" onClick={handleClick}>Delete Account</span>
            </div>
            <form className="settingsForm" onSubmit={handleUpdate}>
                <label>Profile Picture</label>
                <div className="settingsProPic">
                    <img 
                    src={file ? URL.createObjectURL(file):(PF+user.profilePic)}
                    alt="" 
                    className=''
                    />
                    <label htmlFor="fileInput">
                        <i class="settingsProPicIcon fa-regular fa-circle-user"></i>  
                    </label>
                    <input type="file" id='fileInput' style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder={user.username} onChange={e=> setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="email" placeholder={user.email} name='email'  onChange={e=> setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" onChange={e=> setPassword(e.target.value)}/>
                <button className="settingsSubmitButton" type='submit'>Update</button>
                {success && (
                    <span className="" style={{color: "green", textAlign:"center", marginTop:"20px"}}>Profile has been Updated...</span>
                )}
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Setting