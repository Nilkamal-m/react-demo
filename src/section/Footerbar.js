import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Footerbar.css";

const footerBarItem = [
  {
    title: "upcoming events",
    c1: "Upcoming Events 1",
    c1Url: "#",
    c2: "Upcoming Events 2",
    c2Url: "#",
    c3: "Upcoming Events 3",
    c3Url: "#",
    c4: "Upcoming Events 4",
    c4Url: "#",
    c5: "Upcoming Events 5",
    c5Url: "#",
  },
  {
    title: "Important Links",
    c1: "Comming Soon",
    c1Url: "#",
    c2: "Comming Soon",
    c2Url: "#",
    c3: "Comming Soon",
    c3Url: "#",
    c4: "Comming Soon",
    c4Url: "#",
    c5: "Comming Soon",
    c5Url: "#",
  },
  {
    title: "Latest Update",
    c1: "Latest Update 1",
    c1Url: "#",
    c2: "Latest Update 2",
    c2Url: "#",
    c3: "Latest Update 3",
    c3Url: "#",
    c4: "Latest Update 4",
    c4Url: "#",
    c5: "Latest Update 5",
    c5Url: "#",
  },
  {
    title: "Others Activity",
  },
];

export const Footerbar = () => {
  return (
    <>
      <div className="footerbar-container">
        <Grid container>
          {footerBarItem.map((item, i) => (
            <Grid item sm={12} md={3}>
              <div className="footerbar-sec-container">
                <Typography
                  variant="h4"
                  display="block"
                  gutterBottom
                  style={{ color: "#ffff" }}
                >
                  {item.title}
                </Typography>
                <a href={item.c1Url}>{item.c1}</a>
                <a href={item.c2Url}>{item.c2}</a>
                <a href={item.c3Url}>{item.c3}</a>
                <a href={item.c4Url}>{item.c4}</a>
                <a href={item.c5Url}>{item.c5}</a>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
