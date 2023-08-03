import React from 'react'
import './singlepost.scss'

const Singlepost = () => {
  return (
    <div className='singlepost'>
        <div className="singlePostWrapper">
            <img 
                src="https://cdn.pixabay.com/photo/2019/10/02/10/27/nature-4520606_1280.jpg"
                alt="" 
                className="singlePostImg" 
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet
                <div className="singlePostEdit">
                    <i className=" singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className=" singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Vamsi</b></span>
                <span className="singlePostDate">6 hours ago</span>
            </div>
            <p className='singlePostDesc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim, lacus quis mollis imperdiet, lacus leo varius dui, ut convallis sapien nibh quis odio. Curabitur gravida arcu sit amet arcu pulvinar, nec volutpat leo imperdiet. Curabitur nisl purus, varius a enim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim, lacus quis mollis imperdiet, lacus leo varius dui, ut convallis sapien nibh quis odio. Curabitur gravida arcu sit amet arcu pulvinar, nec volutpat leo imperdiet. Curabitur nisl purus, varius a enim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim, lacus quis mollis imperdiet, lacus leo varius dui, ut convallis sapien nibh quis odio. Curabitur gravida arcu sit amet arcu pulvinar, nec volutpat leo imperdiet. Curabitur nisl purus, varius a enim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim, lacus quis mollis imperdiet, lacus leo varius dui, ut convallis sapien nibh quis odio. Curabitur gravida arcu sit amet arcu pulvinar, nec volutpat leo imperdiet. Curabitur nisl purus, varius a enim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim, lacus quis mollis imperdiet, lacus leo varius dui, ut convallis sapien nibh quis odio. Curabitur gravida arcu sit amet arcu pulvinar, nec volutpat leo imperdiet. Curabitur nisl purus, varius a enim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim, lacus quis mollis imperdiet, lacus leo varius dui, ut convallis sapien nibh quis odio. Curabitur gravida arcu sit amet arcu pulvinar, nec volutpat leo imperdiet. Curabitur nisl purus, varius a enim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim, lacus quis mollis imperdiet, lacus leo varius dui, ut convallis sapien nibh quis odio. Curabitur gravida arcu sit amet arcu pulvinar, nec volutpat leo imperdiet. Curabitur nisl purus, varius a enim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim, lacus quis mollis imperdiet, lacus leo varius dui, ut convallis sapien nibh quis odio. Curabitur gravida arcu sit amet arcu pulvinar, nec volutpat leo imperdiet. Curabitur nisl purus, varius a enim.
            </p>
        </div>
    </div>
  )
}

export default Singlepost