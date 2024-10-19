
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Index from './components/Index';
import Pages from './components/Pages';
import { useEffect, useState } from 'react';
import Ternery from './components/condition/Ternery';


function App() {

  const [name,setName]=useState('button')

  const location=useLocation()

  useEffect(()=>{
    if(location.pathname==='/index'){
      setName('index')
    }else if(location.pathname==='/pages'){
      setName('pages')
    }
  })

  let button=<button>{name}</button>
 
  return (
   <div>
    <Routes>
      <Route path='/index/:abc' element={<Index data={button}/>}/>
      <Route path='/pages' element={<Pages data={button}/>}/>
      <Route path='/tern' element={<Ternery/>}/>
      <Route path='*' element={<h1>404 error</h1>}/>
    </Routes>

   </div>
  );
}

export default App;
