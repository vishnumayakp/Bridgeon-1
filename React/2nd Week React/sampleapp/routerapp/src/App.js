import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Homedetails from './pages/Homedetails';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/details/:count' element={<Homedetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
