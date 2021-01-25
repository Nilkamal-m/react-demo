import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Typography className="footer-text">Total Visitor : 585</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography className="footer-text">
              © All right reserved 2020{" "}
            </Typography>
          </Grid>
          <Grid itrm xs={12} sm={3}>
            <Typography className="footer-text">
              Develop by <a href="#">Our Company</a>
            </Typography>
          </Grid>
        </Grid>
      </div>

      {/* <div className="footer-container">
        <Typography className="footer-text">Total Visitor : 585</Typography>
        <Typography className="footer-text">
          © All right reserved 2020{" "}
        </Typography>
        <Typography className="footer-text">
          Develop by <a href="#">Our Company</a>
        </Typography>
        <div></div>
      </div> */}
    </>
  );
};
