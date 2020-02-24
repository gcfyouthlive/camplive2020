import React from 'react';
import './App.css'

import Navbar from "./components/navbar";
import { HSCampJumbotron } from './components/jumbotron';
import Sections from "./components/sections";
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HSCampJumbotron/>
      <Sections />
      <Footer />
    </div>
  )
}

export default App;
