import React from 'react'
import './posts.scss'
import Post from '../Post/Post'

const Posts = ({posts}) => {
  return (
    <div className='posts'>
      {
        posts.map((p) =>{
           return <Post post = {p}/>
        })
      }
       

    </div>
  )
}

export default Posts