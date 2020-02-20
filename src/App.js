import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';
import camplive_logo_black from './svg/camplive-black.svg';
import camplive_logo_white from './svg/camplive-white.svg';
import word_logo_black from './svg/word-nolive-black.svg';
import word_logo_white from './svg/word-nolive-white.svg';
import pjp from './img/pjp.jpg';
import './App.css';

function CampliveLogo(props) {
  const src = (props.color == "white") ? camplive_logo_white : camplive_logo_black;
  return (
    <img class="camplive-logo" src={src} alt="camplive logo" />
  );
}

function WordLogo(props) {
  const src = (props.color == "white") ? word_logo_white : word_logo_black;
  return (
    <img class="word-logo" src={src} alt="word logo" /> 
  );
}

function AltLogo() {
  return (
    <p>
      <ScrabbleHeader text="CAMP" />
      <ScrabbleHeader text="LIVE" />
      <ScrabbleHeader text="WORD" />
    </p>
  );
}

function WhatIsCamp() {
  return (
    <p>
      <h1>WHAT</h1>
      <h1>IS</h1>
      <h1>CAMP</h1>
    </p>
  );
}

function ScrabbleHeader(props) {
  return (
    <h2 class="scrabble-header">{props.text}</h2>
  );
}

function PlayfairHeader(props) {
  return (
    <h2 class="playfair-header">{props.text}</h2>
  );
}

function Navbar() {
  return (
    <div class="navbar">
      <ul>
        <li><CampliveLogo /></li>
         
      </ul>
    </div>
  );
}

function CampJumbotron() {
  return (
    <div class="camp-jumbotron">
      <Container maxWidth="md" style={{"text-align":"center"}}>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12} md>
            <div style={{"padding":"1rem"}}><WordLogo /></div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

function CampJumbotronTest() {
  return (
    <Container maxWidth="md" class="camp-jumbotron">
      <Grid container>
        <Grid item xs={6}>
          <WordLogo />
        </Grid>
        <Grid item xs={6}>
          <h1 class="scrabble-header">High School Camp</h1>
          <br />
          <h1 class="playfair-header">High School Camp</h1>
          <h2 class="playfair-header">May 27-30, 2020</h2>
        </Grid>
      </Grid>
    </Container>
  );
}

function CampCountdown() {
  return (
    <h2>{new Date().toLocaleTimeString()}</h2> 
  );
}

function CampliveSection() {
  return (
    <div id="about" class="camplive-section">
      <Container maxWidth="md">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <ScrabbleHeader text="About Camp" />
          </Grid>
          <Grid item xs={12} md={8}>
            <p>A four-day event packed with activities such as plenaries, games, praise & worship, fellowship, and more — everything that will help you learn more about God and understand His purpose for your life.</p>
          </Grid>
        </Grid> 
      </Container>
    </div>
  );
}

function CampDetailsSection(props) {
  const bgColor = props.bgColor;
  const textColor = props.textColor;
  return (
    <div class="camp-details-section" style={{backgroundColor:bgColor, color:textColor}}>
      <Container maxWidth="md">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <CampDetails 
              color={textColor}
              name="HIGH SCHOOL CAMP"
              dates="May 28 - May 31, 2020"
              years="GR 7 - INCOMING GR 12"
              earlybirdfee="2500"
              earlybirddeadline="APRIL 5, 2020"
              regularfee="3200"
              regulardeadline="MAY 3, 2020"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

function CampDetails(props) {
  return (
    <p class="camp-details">
      <PlayfairHeader text={props.name} />
      <p>{props.dates}<br />{props.years}</p> 
      <h3>registration</h3>
      <p>EARLY BIRD: <b>&#8369; {props.earlybirdfee}</b>
        <br />UNTIL {props.earlybirddeadline}</p>
      <p>REGULAR FEE: <b>&#8369; {props.regularfee}</b>
        <br />UNTIL {props.regulardeadline}
        <br />- OR -
        <br />UNTIL SLOTS ARE FILLED</p>
    </p>
  );
}

function SpeakersSection(props) {
  return (
    <div class="speakers-section" style={{"background-color":props.bgColor}}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item md={3}>
            <img src={pjp} width="90%" />
          </Grid>
          <Grid item md={9}>
            <h4 class="scrabble-header" style={{"margin-bottom": 0}}>hs camp speaker</h4>
            <h3 style={{"margin-top": 0}}>pastor john paul kabuhat</h3>
            <p>John Paul Kabuhat has a BSC Marketing Management in DLSU, Master of Divinity in Leadership Studies (International Graduate School of Leadership), and currently taking up Doctor of Ministry (Grace School of Theology)</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

function Footer() {
  return (
    <div></div>
  );
}

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
