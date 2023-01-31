import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Homepage'
import Vedioplayer from './Pages/Vedioplayer'
function App() {
  return (
    <BrowserRouter>
       <Routes>
           <Route path='/' element = {<Home/>} />
           <Route path='/vedio' element = {<Vedioplayer/>} />
       </Routes>
    </BrowserRouter>
 )
}

export default App;
