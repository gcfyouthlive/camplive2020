import React from 'react';
<<<<<<< HEAD
import './App.css'

=======
//assets
import 'bootstrap/dist/css/bootstrap.min.css';
//components
>>>>>>> master
import Navbar from "./components/navbar";
import { HSCampJumbotron } from './components/jumbotron';
import Sections from "./components/sections";
import Footer from './components/footer';
<<<<<<< HEAD
=======

function CampCountdown() {
  return (
    <h2>{new Date().toLocaleTimeString()}</h2>
  );
}
>>>>>>> master

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HSCampJumbotron/>
      <Sections />
      <Footer />
    </div>
  )
}

<<<<<<< HEAD
export default App;
=======
>>>>>>> master
