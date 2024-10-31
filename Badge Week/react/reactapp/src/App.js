import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Index from './components/Index';
import Pages from './components/Pages';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/index' element={<Index/>}/>
      <Route path='/pages' element={<Pages/>}/>
     </Routes>
     </BrowserRouter>
     </div>
  );
}

export default App;
