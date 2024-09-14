import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs';
import Create from './pages/Create';
import Details from './pages/Details';
import { BlogProvider } from './Usecontext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <BlogProvider>
      <Routes>
        <Route path='/' element={<Blogs/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
      </BlogProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
