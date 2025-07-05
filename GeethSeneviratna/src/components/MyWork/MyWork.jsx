import React from 'react'
import './MyWork.css'
import mywork_datafrom from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

function MyWork() {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-tittle">
            <h1>My latest work</h1>
            <div className="underline"></div>

        </div>
      <div className="mywork-container">
        {mywork_datafrom.map((work,index)=>{
            return <img key={index} src={work.w_img} alt=""/>
        })}

      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>

    </div>
  )
}

export default MyWork
