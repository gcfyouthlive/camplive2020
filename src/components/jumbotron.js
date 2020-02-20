import React from "react";
//materialui
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
//components
import {WordLogo} from "./logo";


export function HSCampJumbotron() {
    return (
        <div class="camp-jumbotron">
            <Container maxWidth="md" style={{"text-align":"center"}}>
                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item xs={12} md>
                        <div style={{"padding":"1rem"}}><WordLogo /></div>
                        <div className={"playfair-header"}>High School Camp 2020</div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

//TODO: Change to College Camp Logo
export function ColCampJumbotron() {
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

export function BothCampJumbotron() {
    return (
        <div class="camp-jumbotron">
            <Container maxWidth="md" style={{"text-align":"center"}}>
                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item xs={6} md>
                        <div style={{"padding":"1rem"}}><WordLogo /></div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
