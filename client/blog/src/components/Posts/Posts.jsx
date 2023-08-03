import React from 'react'
import './posts.scss'
import Post from '../Post/Post'

const Posts = () => {
  return (
    <div className='posts'>
        <Post img = {"https://cdn.pixabay.com/photo/2019/10/02/10/27/nature-4520606_1280.jpg"}/>
        <Post img = {"https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg"}/>
        <Post img = {"https://wallpaperaccess.com/full/91498.jpg"}/>
        <Post img = {"https://images.pexels.com/photos/1105389/pexels-photo-1105389.jpeg?cs=srgb&dl=pexels-johannes-plenio-1105389.jpg&fm=jpg"}/>
        <Post img = {"https://images.unsplash.com/photo-1666625628272-a1071f6f7173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&w=1000&q=80"}/>
        <Post img = {"https://img.freepik.com/premium-photo/sunset-landscape-with-palm-trees-mountains-generative-ai_123447-16865.jpg"}/>

    </div>
  )
}

export default Posts