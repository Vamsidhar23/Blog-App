import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Single.scss'
import Singlepost from '../../components/SinglePost/Singlepost'

const Single = () => {
  return (
    <div className='single'>
        {/* post */}
        <Singlepost/>
        <Sidebar/>
    </div>
  )
}

export default Single
