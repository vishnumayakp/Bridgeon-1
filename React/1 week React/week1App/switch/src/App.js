import { useState } from 'react';
import './App.css';
function App() {
  const [color,setColor]=useState("white")
  const [count,setCount]=useState(0)
  const changeTheme=()=>{
    color==="white"? setColor('black'):setColor('white')
  }
  
  const addCount=()=>{
    setCount(count+1)
  }
  return (
    <div style={{backgroundColor:color}} className="App">
        <button onClick={changeTheme}>Switch Theme</button>
        <h1>Counter: {count}</h1>
        <button onClick={addCount}>Add</button>
        
    </div>
  );
}

export default App;
