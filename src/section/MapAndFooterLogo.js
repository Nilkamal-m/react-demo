import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { GoogleMap } from "../component/GoogleMap";

import "./MapAndFooterLogo.css";

const MapAndFooterLogo = () => {
  return (
    <>
      <div className="map-footer-main-cont">
        <Paper
          variant="outlined"
          style={{ padding: "100px 50px", margin: "50px 100px" }}
        >
          <div className="map-footer-cont">
            <img
              style={{ width: "350px", height: "auto" }}
              src="https://brmgss.org/wp-content/uploads/2020/04/brmgss-logo.jpg"
            ></img>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography gutterBottom>Office Hours</Typography>
              <Typography gutterBottom>
                <b>Monday to Friday: </b>
                9:00 AM to 6:00 PM
              </Typography>
              <Typography gutterBottom>
                <b>Saturday:</b> 9:00 AM to 5:00 PM
              </Typography>
              <Typography gutterBottom>
                {" "}
                <b>Sunday:</b> Closed
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography gutterBottom>Contact Info</Typography>
              <Typography align="center" gutterBottom>
                D-86, SAHYOG VIHAR, UTTAM NAGAR, NEW DELHI-59
              </Typography>
              <Typography gutterBottom>eMail: </Typography>
              <Typography gutterBottom>Helpline: 011-25332828</Typography>
              <Typography gutterBottom>Fax:</Typography>
            </div>
          </div>
          <GoogleMap />
        </Paper>
      </div>
    </>
  );
};

export default MapAndFooterLogo;
