
import { createContext } from 'react';
import './App.css';
import Context1 from './components/UseContext/Context1';
import Reducer from './components/UseReducer/Reducer';
import Server from './components/json server/Server';

export const Usecontext=createContext()
function App() {
  const arr=[1,2,3,4,5]

  
  return (
    <div className="App">
      {/* <Reducer/> */}
      {/* <Server/> */}
    <Usecontext.Provider value={{arr}}>
      <Context1/>
    </Usecontext.Provider>
    </div>
  );
}

export default App;
