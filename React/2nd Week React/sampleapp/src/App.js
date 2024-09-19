
import './App.css';
import Parentcompo from './components/usecallback/Parentcompo';
import Toggle from './components/useContext/custom hooks/Toggle';
import Togglebtn from './components/useContext/custom hooks/Togglebtn';
import Component1 from './components/useContext/propdrilling/Component1';
import Context1 from './components/useContext/usecontext/Context1';
import Reducer from './components/useReducer/Reducer';
import ToggleRed from './components/useReducer/ToggleRed';

function App() {
  // const value="Welcome to useContext"
  return (
    <div className="App">
      {/* <Reducer/> */}
      {/* <Component1 data={value}/> */}
      {/* <Context1/> */}
      {/* <Toggle/> */}
      <Togglebtn/>
      <ToggleRed/>
      {/* <Parent/> */}
      {/* <Parentcompo/> */}
      
    </div>
  );
}

export default App;
