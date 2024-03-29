import React from 'react'
import './post.scss'
import { Link } from 'react-router-dom'

const Post = ({post}) => {

  const PF = "http://localhost:5000/images/"


  return (
    <div className='post'>
          <Link className='link' to={`/post/${post._id}`}>
            {(post.photo && 
              <img 
              src={PF + post.photo}
              alt=""
              className="postImg" 
              />
            )}
            <div className="postInfo">
              <div className="postCats">
                {post.categories.map((c)=>{
                  <span className="postCat">{c.name}</span>
                })}
              </div>
              <span className="postTitle">
                  {post.title}
              </span>
              <hr />
              <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
              </div>
              <p className="postDesc">
                  {post.desc}
              </p>
          </Link>
    </div>
  )
}

export default Post