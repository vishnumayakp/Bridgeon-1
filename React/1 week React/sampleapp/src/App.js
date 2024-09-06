
import { useState } from 'react';
import './App.css';
import Counterprops from './component/counter/Counterprops';
import Focus from './component/useRef/Focus';
import List from './component/fetch/List';
import Fetchdata from './component/fetch/Fetchdata';
// import Counterbg from './component/counter/Counterbg'
// import Counter from './component/counter/Counter';
// import FormVal from './component/form/FormVal';
import Todo from './component/todo/Todo';
import Todo2 from './component/todo/Todo2';
import Bgref from './component/useRef/Bgref';
import Count from './component/counter/Count';
import FetchDatas from './component/fetch/FetchDatas';
import Fetch from './component/test/Fetch';
// import Bgchange from './component/counter/Bgchange';
// import Prevcount from './component/counter/Prevcount';
// import Counteruseref from './component/counter/Counteruseref';

function App() {
  // const [count,setCount]=useState(0)

  // const increment=()=>{
  //   setCount(count+1)
  // }
  return (
    <div className="App">
      {/* <FormVal/> */}
      {/* <Todo/> */}
      {/* <Counter/> */}
      {/* <Counterbg/> */}
      {/* <Bgchange/> */}
      {/* <Prevcount/> */}
      {/* <Counteruseref/> */}
     {/* <Counterprops count={count} 
     addNum={increment} /> */}
     {/* <Focus/> */}
     {/* <List/> */}
     {/* <Fetchdata/> */}
    {/* <<Bgref/>> */}
    {/* <Count/> */}
    {/* <FetchDatas/> */}
    <Fetch/>
    </div>
  );
}

export default App;
