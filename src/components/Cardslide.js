import React, { useState } from 'react'
import mydata from './mydata'
import "./Cardslide.css"
const Cardslide = () => {
    const[num,setNum]=useState(0)
    const [img,setimg]=useState(0)
    function nextbtn(){
         if (num===mydata.length-1) {
// alert("not have more data")
setNum(0)
return; 
 
    
   
  }
setNum(num+1)
setimg(img+1)
    }
    function prevbtn(){
setNum(num+1  )
if (num===mydata.length-1) {
  setNum(0)
}
return;

    }


    let totaldetails=mydata[num]
  return (
    <div className='cardslide'>
<div className="imgbox"><img src={totaldetails.URL} alt="" /></div>
<div className="contentbox">
<h1>{totaldetails.name}</h1>
<h2>{totaldetails.age}</h2>
    <button className='btn' onClick={prevbtn}>prev</button>
    <button className='btn' onClick={nextbtn}>Next</button> 
    
</div>


    </div>

  )
 
  
}
export default Cardslide
