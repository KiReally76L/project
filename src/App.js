import React from "react";
import './index.scss'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import SubList from './SubList/HomeSub/HomeSub'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>      
      <Route path="/SubList" element={<SubList/>}/>
    </Routes>
    </div>
  );}

export default App;
