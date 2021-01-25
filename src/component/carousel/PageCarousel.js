import Slide from "@material-ui/core/Slide";
import React, { Component } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Paper,
} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { Carousel, CarouselSlide } from "react-material-ui-carousel";
import Slider1 from "../../assets/img/slider1.jpg";

export default class PageCarousel extends Component {
  pictures = [
    {
      imagel: { Slider1 },
      imager: "./images/radio7-2-2.png",
      title: "r7-2",
    },
    {
      imagel: "../../assets/img/slider1.jpg",
      imager: "./images/radio7-3-2.png",
      title: "r7-3",
    },
    {
      imagel: "../../assets/img/slider1.jpg",
      imager: "./images/masterphil-2.png",
      title: "mp",
    },
    {
      imagel: "../../assets/img/slider1.jpg",
      imager: "./images/vito-2.png",
      title: "vito",
    },
  ];

  render() {
    return (
      <Carousel>
        <Paper>
          <h1>Hello</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quae,
            dolorem cupiditate magni quas reiciendis nulla, ab optio asperiores
            praesentium sequi inventore, harum exercitationem laboriosam quidem
            unde. Natus, aliquid quam?
          </p>
        </Paper>
        <Paper>
          <h1>Hello</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quae,
            dolorem cupiditate magni quas reiciendis nulla, ab optio asperiores
            praesentium sequi inventore, harum exercitationem laboriosam quidem
            unde. Natus, aliquid quam?
          </p>
        </Paper>
        <Paper>
          <h1>Hello</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quae,
            dolorem cupiditate magni quas reiciendis nulla, ab optio asperiores
            praesentium sequi inventore, harum exercitationem laboriosam quidem
            unde. Natus, aliquid quam?
          </p>
        </Paper>
      </Carousel>
    );
  }
}
