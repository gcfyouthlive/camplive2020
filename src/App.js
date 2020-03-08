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
import CheckBack from './components/checkback'



export default function App() {
    const endpoint = React.createContext('http://localhost:8000/api/');
    console.log('endpoint', toString(endpoint));
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <HSCampJumbotron/>
                <Sections/>
                <Switch>
                    <Route path={'/form'}>
                        <CampReg/>
                        <br/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    )
}

