import React from 'react';
//css
import './App.css';

function App() {
  return (
    <div class="App">
      <Navbar />
      <CampJumbotron />
      <CampliveSection />
      <CampDetailsSection bgColor="#EAC27F" textColor="#222"/>
      <SpeakersSection bgColor="#EAC27F"/>
      <SpeakersSection bgColor="#FFF"/>
      <Footer />
    </div>
  );
}

export default App;
