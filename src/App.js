import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

//assets
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Navbar from "./components/navbar";
import {HSCampJumbotron} from './components/jumbotron'
    ;
import Sections from "./components/sections"
import CampReg from './components/registration'
import Footer from './components/footer';

// function CampCountdown() {
//     return (
//         <h2>{new Date().toLocaleTimeString()}</h2>
//     );
// }

export default function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <HSCampJumbotron/>
                <Sections/>
                <Switch>
                    <Route path={'/form'}>
                        <CampReg/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    )
}

