import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

// COMPONENTS

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// PAGES

import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
