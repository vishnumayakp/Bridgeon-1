import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formval from './components/Formvalidation/Formval';
import Life from './components/lifecycle/Life';
// import Useref from './components/useRef/Useref';
// import Fetchdata from './components/fetchData/Fetchdata';
// import Inputbox from './components/useRef/Inputbox';


// import Key from './components/list_item/Key';
// import List from './components/list_item/List';

// import Events from './components/Events';
// import Switchtheme from './components/Switchtheme';

function App() {
 const [state,setState] = useState(false)
  return (
    <div className="App">
      {/* <Switchtheme/> */}
      {/* <Events/> */}
      {/* <List/> */}
      {/* <Key/> */}
      {/* 'Mounting,  unmounting' React Life Cycle */}
       <h1 onClick={()=>setState(!state)}>Show/Hide</h1>  
       {state ?  <Life/>:null} 
      {/* <Useref/> */}
      {/* <Fetchdata/> */}
      {/* <Inputbox/> */}
      {/* <Formval/> */}

    </div>
  )
}

export default App;
