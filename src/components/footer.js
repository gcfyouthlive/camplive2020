import React from "react";
import Grid from "@material-ui/core/Grid";
import yl from "../svg/youthlive-white.svg"

export default function Footer() {
    return (
        <div className="footer">
            <Grid container alignContent="center" justify="flex-start" spacing={1}>
                <Grid item xs={1}>
                    <img src={yl}></img>
                </Grid>
                <Grid item xs={2}>
                    <p style={{fontSize: 10 + 'px'}}>Made with &lt;3 by @montanohanz & @joshuagad<br />(c) 2020</p>
                </Grid>

            </Grid>
        </div>
    );
}
