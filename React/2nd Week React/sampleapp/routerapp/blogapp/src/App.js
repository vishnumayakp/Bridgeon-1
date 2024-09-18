import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Home';
import Create from './pages/Create';
import Details from './pages/Details';
import { BlogProvider, NoteProvider } from './Usecontext';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NoteProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
      </NoteProvider>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
