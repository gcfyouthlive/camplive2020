import React from "react";
//assets
import pjp from "../img/pjp.jpg";
import ylfamily from "../img/yl-family.jpg";

//components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
//css
import './css/fonts.css';
import {CampliveLogo} from "./logo";



export function CampliveSection() {
    return (
        <div id="about" class="camplive-section">
            <div>
                <img src={ylfamily} width="100%" />
            </div>
            <Container maxWidth="md">
                <Grid container alignItems={"center"} justify="center" spacing={6}>
                    <Grid item xs={12} md={4}>
                        <h1 className={"playfair-header"}>About <CampliveLogo style={{width: 70 +'px'}}/></h1>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <p>A four-day event packed with activities such as plenaries, games, praise & worship, fellowship, and more — everything that will help you learn more about God and understand His purpose for your life.</p>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

//TODO: Change photo
export function WAYLSection() {
    return (
        <div class="wayl-section">
            <div>
                <img src={ylfamily} width="100%" />
            </div>
            <Container maxWidth="md">
                <Grid container alignItems={"center"} spacing={6}>
                    <Grid item xs={12} md={8}>
                        <p style={{fontSize: 16 + 'px'}}>GCF Youth L.I.V.E. is the youth expression of Greenhills Christian Fellowship Ortigas. We are a community of high school and college students committed to Jesus’s call to discipleship. We a family living in view of eternity — a movement for the youth, by the youth.
                            <br/><br/>
                            <b>Youth Service</b><br/>
                            Every Saturday at 5:00PM<br/>
                            Auditorium A<br/><br/>

                            <b>Sunday Y-Groups</b><br/>
                            Every Sunday at 9:30-10:30 AM and 4:30-5:30 PM</p>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <h3 className="raleway-sub">Living In View of Eternity</h3>
                        <h1 className="playfair-header">#WeAreYouthLIVE</h1>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

function CampDetails(props) {
    return (
        <Grid container alignItems="center" justify="center" className="camp-details" spacing={2}>
                <Grid item xs={12} sm={3}>
                    <h1 className={'playfair-header'}>{props.name}</h1>
                        <p>
                            {props.dates}<br />
                            {props.location}<br/>
                            {props.years}
                        </p>

                </Grid>
                <Grid item xs={12} sm={3} >
                    <h3>registration</h3>
                    <p>
                        EARLY BIRD: <b>&#8369; {props.earlybirdfee}</b>
                        <br />UNTIL {props.earlybirddeadline}
                    </p>
                    <p>
                        REGULAR FEE: <b>&#8369; {props.regularfee}</b>
                        <br />UNTIL {props.regulardeadline}
                        <br />- OR -
                        <br />UNTIL SLOTS ARE FILLED
                    </p>
                    <Button variant='contained' color='Primary'>Sign Up</Button>
                </Grid>
            </Grid>
    );
}

// ----- HS DETAILS ------
export function HSDetailsSection(props) {
    const bgColor = props.bgColor;
    const textColor = props.textColor;
    return (
        <div class="camp-details-section" style={{backgroundColor:bgColor, color:textColor}}>
            <CampDetails
                color={textColor}
                name="HIGH SCHOOL CAMP"
                dates="May 28 - May 31, 2020"
                location="LOL CHANGEME"
                years="GR 7 - INCOMING GR 12"
                earlybirdfee="2500"
                earlybirddeadline="APRIL 5, 2020"
                regularfee="3200"
                regulardeadline="MAY 3, 2020"
            />
        </div>
    );
}

export function HSSpeakersSection(props) {
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

// ----- COL DETAILS ------
export function ColDetailsSection(props) {
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
                            location="LOL CHANGEME"
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

export function ColSpeakersSection(props) {
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
