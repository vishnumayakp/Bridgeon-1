import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import Main from './components/conditionnal/Main'
function App() {
  const [count,setCount]=useState(0)
  const addCount = () =>{
    return setCount(count+1)
}

  const addFive = () => {
    return setCount(count+5)
  }
  return (
    <div className="App">
      <button onClick={addCount}>Add</button>
      <button onClick={addFive}> Add 5</button>
      {count===0? <h3>ZERO</h3>:count%2===0? <h3>Even Number</h3>:count%2!==0? <h3>Odd Number</h3>:null}
      <Counter count={count}/>
    <Main isLogged={true}/>
    </div>
  );
}

export default App;
