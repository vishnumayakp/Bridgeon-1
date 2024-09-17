import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CreatedBlogs } from './components/Contexts/Usecontext';
import { Mycreatedblog } from './components/Contexts/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
<Mycreatedblog>
<React.StrictMode>
    <App />
  </React.StrictMode>
</Mycreatedblog>

);


