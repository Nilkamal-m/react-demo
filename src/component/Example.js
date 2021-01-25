import React from "react";
import Carousel from "react-material-ui-carousel";
import { Button, Grid, Paper } from "@material-ui/core";

function Example(props) {
  const items = [
    {
      image: "https://brmgss.org/wp-content/uploads/2020/03/slider3.jpg",
    },
    {
      image: "https://brmgss.org/wp-content/uploads/2020/03/slider1.jpg",
    },
    {
      image: "https://brmgss.org/wp-content/uploads/2020/04/slider4.jpg",
    },
  ];

  return (
    <Carousel navButtonsAlwaysInvisible={true} animation="slide">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default Example;

function Item(props) {
  return (
    <Paper>
      <Grid container>
        <Grid item xs={12}>
          <img
            src={props.item.image}
            style={{ width: "100%", height: "100%" }}
          ></img>
        </Grid>
      </Grid>
    </Paper>
  );
}
