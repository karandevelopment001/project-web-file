
import React from 'react'
import Feachers from './Mydata/Feachers'
import './Home.css'
import Aboutus from './Mydata/Aboutus'



const Home = () => {
  return (
    <div className="mainbody">

      <div className="herobox">

        <div className="leftbox">
          <h1 className="hading">professional</h1>

          <h1 id="title">security services</h1>

          <h1 className="hading1">you can trust</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vitae cupiditate nostrum accusamus quod placeat sequi cum,
            itaque dolorum dignissimos eaque magnam accusantium,
            deleniti exercitationem incidunt error sunt,
            recusandae fugiat ratione.
          </p>
        </div>

        <div className="leftbox" id="rightbox">
          <img
            className="camera"
            src="https://img.freepik.com/premium-photo/cctv-security-camera-with-blurry-background_449849-13367.jpg"
            alt="Security Camera"
          />
        </div>

      </div>
    
    <Aboutus/>

    </div>
  
  )
}

export default Home;

