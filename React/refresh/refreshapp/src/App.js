
import { createContext } from 'react';
import './App.css';
import Component1 from './components/useContext/Component1';
import Reducer from './components/useReducer/Reducer';
import Component2 from './components/useContext/Component2';
import Component3 from './components/useContext/Component3';
import Jsondata from './components/Json server/Jsondata';
import Parent from './components/Reactmemo/Parent';
export const UserContext=createContext()
function App() {
  const arr=[1,2,3,4,5,6]
  return (
    <div className="App">
      {/* <Reducer/> */}
     {/* <UserContext.Provider value={{arr}}>
     <Component1/>
     <Component2/>
     <Component3/>
     </UserContext.Provider> */}
   
      {/* <Parent/> */}

    </div>
  );
}

export default App;
