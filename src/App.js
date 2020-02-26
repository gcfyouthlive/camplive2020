import React from 'react';
//assets
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Navbar from "./components/navbar";
import { HSCampJumbotron } from './components/jumbotron';
import Sections from "./components/sections";
import Footer from './components/footer';

function CampCountdown() {
  return (
    <h2>{new Date().toLocaleTimeString()}</h2>
  );
}

export default function App() {
  return (
    <div class="App">
      <Navbar />
      <HSCampJumbotron/>
      <Sections />
      <Footer />
    </div>
  )
}

