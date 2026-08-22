import React from "react";

function Livedata({title,count}){
    return (
       <div style={cardstyle}>
       <h3> {count} </h3>
        <p>{title}</p>
        
       </div>
    );
    
}
const cardstyle ={
    
    border:'1px solid #000',
    pading:'6px',
    borderRadius:'30px',
    textAlign:'center',
    width:'150px',
    boxshadow:'0 2px 4px grba(0,0,0,0.1)',
    

};
export default Livedata