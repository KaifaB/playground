import React from "react";

function Kirby(props) {
  return (
    <div className="kirby" style={{ animation: `${props.motion} 0.8s infinite ease`}}>  
    </div>
  );
}

export default Kirby;
