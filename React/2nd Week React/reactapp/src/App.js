import { BrowserRouter, Route, Routes } from 'react-router-dom';  
import { createContext } from 'react';
import './App.css';
import Context1 from './components/UseContext/Context1';
import Reducer from './components/UseReducer/Reducer';
import Server from './components/json server/Server';
import Blog from './components/Blog/Blog';
import Create from './components/Blog/Create';
import Details from './components/Blog/Details';
import Blogs from './components/Blogs/Blogs';
import Createblog from './components/Blogs/Createblog';
import BlogDetail from './components/Blogs/BlogDetail';
import HocLearn from './components/Hoc/HocLearn';
import Hover from './components/Hoc/Hover';

export const Usecontext=createContext()
function App() {
  // const arr=[1,2,3,4,5]

  
  return (
    <div className="App">
      {/* <Reducer/> */}
      {/* <Server/> */}
    {/* <Usecontext.Provider value={{arr}}>
      <Context1/>
    </Usecontext.Provider> */}
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Blog/>} />
      <Route path='/create' element={<Create/>} />
      <Route path='/details/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter> */}

    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Blogs/>}/>
      <Route path='/create' element={<Createblog/>}/>
      <Route path='/blogdetails' element={<BlogDetail/>}/>
    </Routes>
    </BrowserRouter> */}
    <HocLearn/>
    <Hover/>
    </div>
  );
}

export default App;
