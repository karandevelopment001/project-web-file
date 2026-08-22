import React, { useEffect } from 'react'
import { useState } from 'react'
const Mytablat = () => {
let [count,setCount]=useState(0)
    
    function playfun(){
        setCount(()=>count+1)
    }
    useEffect(()=>{
        setTimeout(() => {
            setCount(count+1)
        }, 1000);
    },[count])
  return (
    <div>
<h1>{count}</h1>
<button onClick={playfun}>play</button>
    </div>
  )
}

export default Mytablat