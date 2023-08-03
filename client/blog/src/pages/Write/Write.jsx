import React from 'react'
import './write.scss'

const Write = () => {
  return (
    <div className='write'>
        <img 
        src="https://cdn.pixabay.com/photo/2019/10/02/10/27/nature-4520606_1280.jpg" 
        alt="" 
        className="writeImg"
        />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} /> {/*when we refresh the page it automatically focusses or highlighted on the "writeInput".*/} 
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...' type="text" className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write