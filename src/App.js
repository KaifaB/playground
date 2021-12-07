import React, { useEffect, useState } from 'react';
import './App.css';
import Kirby from './Components/Kirby';

let i = 0;
var timer;
function App() {
  
  //arrow key walk functions
  const check = e => {
    console.log(e.keyCode)
    if(e.keyCode === 39){
      i++
      setStance("walk-right")
      setLocation(i)
      console.log(location)
    }
    if(e.keyCode === 37){
      setStance("walk-left")
      i--
      setLocation(i)
      console.log(location)
    }
  }
  const stop = e => {
    if(e.keyCode === 39){
      setStance("stand-right")
    }
    if(e.keyCode === 37){
      setStance("stand-left")
    }
  }
  //button walk functions
  const stand = () => {
    clearInterval(timer);
    timer= null;
    setStance("stand-left")
  }
  const walk = num => {
    setInterval( changeWalk(num), 50);
    setStance("walk-left")
  }
  const changeWalk = (num) => {
    i=i-num
    setLocation(i)
    console.log(i)
  }
  

  const [stance, setStance] = useState('stand-right')
  const [focus, setFocus] = useState(true)
  const [location, setLocation] = useState(0)
  const [moving, setMoving] = useState(0)

  useEffect(() => {
    document.getElementById("check").focus();
    console.log(moving)
    if(moving !== 0){
    walk(moving)
    }else{
      stand()
    }
  }, [moving])

  return (
    <div className="App" style={{ transform: `translateX(-${location*4}px)`}}>
      <Kirby motion={stance}/>
      {!focus ?
      <div className="paused">
        <h1>"PAUSED"</h1>
        <h2>Click to Resume</h2>
      </div>
      : null}
      <div className="buttons">
        <button onMouseDown={() => {setMoving(1)}} onMouseUp={() => {setMoving(0)}}>left</button>
        <button onMouseDown={() => {setMoving(-1)}} onMouseUp={() => {setMoving(0)}}>right</button>
      </div>
      <input id="check" autoFocus onKeyDown={check} onKeyUp={stop} onClick={() =>{setFocus(true)}} onBlur={()=>{setFocus(false)}} />
    </div>
  );
}

export default App;
