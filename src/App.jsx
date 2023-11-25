import React from 'react'
import './App.css'
import Home from './Pages/Home'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Login from './Pages/Registration/Login';
import SignUp from './Pages/Registration/SignUp';
function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
