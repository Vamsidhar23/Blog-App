import React from 'react'
import './post.scss'
import { Link } from 'react-router-dom'

const Post = (props) => {
  return (
    <div className='post'>
          <Link className='link' to='/post/:postid'>
            <img 
              src={props.img}
              alt=""
              className="postImg" 
            />
            <div className="postInfo">
              <div className="postCats">
                  <span className="postCat">Music</span>
                  <span className="postCat">Cinema</span>
              </div>
              <span className="postTitle">
                  Lorem ipsum dolor sit amet 
              </span>
              <hr />
              <span className="postDate">6 hours ago</span>
              </div>
              <p className="postDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar ligula sed finibus commodo. Ut justo justo, sollicitudin vitae ultrices quis, ultricies at elit. Phasellus ultrices ligula ac eleifend pellentesque. Donec nec diam id dui faucibus commodo ut eu est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar ligula sed finibus commodo. Ut justo justo, sollicitudin vitae ultrices quis, ultricies at elit. Phasellus ultrices ligula ac eleifend pellentesque. Donec nec diam id dui faucibus commodo ut eu est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar ligula sed finibus commodo. Ut justo justo, sollicitudin vitae ultrices quis, ultricies at elit. Phasellus ultrices ligula ac eleifend pellentesque. Donec nec diam id dui faucibus commodo ut eu est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
          </Link>
    </div>
  )
}

export default Post