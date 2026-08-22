import React from 'react'
import mydata from './mydata'
import './mycard.css';

const Mycard = () => {
  return (
    <div>{
     mydata.map(item=><div className='maincard'>
     <div className='imgbox'>
      <img id='img' src={item.URL} alt="" />
     </div>
      <h1>{item.name}</h1>
      <h2> {item.age}  </h2>
  
     </div> )   
}</div>
  )
  
}

export default Mycard
