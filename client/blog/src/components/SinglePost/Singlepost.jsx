import React, { useContext, useEffect, useState } from 'react'
import './singlepost.scss'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../../context/Context'

const Singlepost = () => {

    const location = useLocation()
    const path = (location.pathname.split('/')[2]);
    const [post, setPost] = useState({});
    const {user} = useContext(Context);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [update,setUpdate] = useState(false);

    const PF = "http://localhost:5000/images/"

    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get('/api/posts/' + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);  
        }
        getPosts();
    }, [path])

    const handleClick = async () =>{
        try{
            await axios.delete( `/api/posts/${path}`, {
                data:{username:user.username},
            });
            window.location.replace('/');
        }catch(err){

        }
    }

    const handleUpdate = async () =>{
        try{
            await axios.put('/api/posts/' + path , 
                {username:user.username, title:title,desc:desc}, 
            );
            setUpdate(false);
        }catch(err){

        }
    }

  return (
    <div className='singlepost'>
        <div className="singlePostWrapper">
            {(post.photo && 
                <img 
                src={PF + post.photo }
                alt="" 
                className="singlePostImg" 
                />
            )}
            {update ? <input type='text' value={title} onChange={(e) => (setTitle(e.target.value))} className='singlePostTitleInput' autoFocus></input> :
            (<h1 className="singlePostTitle">
                {title}
                {post.username === user?.username &&      
            <div className="singlePostEdit">
                    <i className=" singlePostIcon fa-regular fa-pen-to-square" onClick={(e) => setUpdate(true)}></i>
                    <i className=" singlePostIcon fa-solid fa-trash" onClick={handleClick}></i>
                </div>}
            </h1>
            )}
            <div className="singlePostInfo">
                <Link className="link" to={`/?user=${post.username}`}>
                    <span className="singlePostAuthor">Author: <b>{post.username}</b></span>
                </Link>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            {update ? <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className='singlePostDescInput'></textarea>: (

                <p className='singlePostDesc'>
                    {desc}
                </p>
            )}
            {update &&
                <button className="singlePostButton" onClick={handleUpdate}>Update</button>
            }
        </div>
    </div>
  )
}

export default Singlepost