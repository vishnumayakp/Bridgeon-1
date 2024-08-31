import './App.css'
import {useState} from 'react'
import Counter from './components/Counter'
import Employee from './components/Employee'
function App() {
  const [count,setCount]=useState(0)
  const addCount = () =>{
    setCount(count+1)
  }
  const addCounter = () =>{
    setCount(count+5)
  }
  let obj={
    title:"1st Counter",
    count,
    place:'karad'
  }
  let employee=[
    {name:'Vishnumaya', age:20,},
    {name:'Abhay', age:20,},
    {name:'Hrithic', age:20,},
    {name:'Vishnu', age:20,},
  ]
  return (
    <div className='App'>
      <button onClick={addCount}>Click</button>
     <Counter {...obj}/>
     <Counter title="2nd Counter: " count={count}/>
     {
      employee.map((obj,index)=> <Employee key={index} {...obj}/>)
     }
    </div>
  );
}

export default App;
