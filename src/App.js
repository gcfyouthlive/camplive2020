import React from 'react';
//assets

//components
import Navbar from "./components/navbar";
import { HSCampJumbotron } from './components/jumbotron';
import Sections from "./components/sections";
import Footer from './components/footer';
import './App.css'

function CampCountdown() {
  return (
    <h2>{new Date().toLocaleTimeString()}</h2>
  );
}

function App() {
  return (
    <div class="App">
      <Navbar />
      <HSCampJumbotron/>
      <Sections />
      <Footer />
    </div>
  )
}

export default App;

