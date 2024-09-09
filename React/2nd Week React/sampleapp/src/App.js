
import './App.css';
import Toggle from './components/useContext/custom hooks/Toggle';
import Component1 from './components/useContext/propdrilling/Component1';
import Context1 from './components/useContext/usecontext/Context1';
import Reducer from './components/useReducer/Reducer';

function App() {
  // const value="Welcome to useContext"
  return (
    <div className="App">
      {/* <Reducer/> */}
      {/* <Component1 data={value}/> */}
      {/* <Context1/> */}
      <Toggle/>
    </div>
  );
}

export default App;
