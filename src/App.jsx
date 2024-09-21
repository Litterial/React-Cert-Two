import { Routes,Route,BrowserRouter } from 'react-router-dom';
import React from 'react';
import './App.css'
import SelectTrivia from "./SelectTrivia.jsx"
import Results from "./Results.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectTrivia />}/>
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
