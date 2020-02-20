import React from 'react';
//assets

//components
import {CampliveLogo, WordLogo} from './components/logo';
import Navbar from "./components/navbar";
import {HSCampJumbotron, ColCampJumbotron} from './components/jumbotron'
import {
    CampliveSection,
    HSDetailsSection,
    HSSpeakersSection,
    ColDetailsSection,
    ColSpeakersSection,
    WAYLSection,
} from "./components/section";
import Footer from './components/footer';
import CssBaseline from '@material-ui/core/CssBaseline'
//css
import './App.css'

function CampCountdown() {
    return (
        <h2>{new Date().toLocaleTimeString()}</h2>
    );
}

function App() {
    return (
        <div class="App">
            <CssBaseline/>
            <Navbar />
            <HSCampJumbotron/>
            <CampliveSection/>
            <HSDetailsSection/>
            <HSSpeakersSection/>
            <WAYLSection/>
            <Footer />
        </div>
    );
}

export default App;

