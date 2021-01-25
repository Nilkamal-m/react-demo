import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import "./ProfileColumn.css";

export const ProfileColumn = () => {
  return (
    <div className="pro-col-container">
      <Grid container>
        <Grid item sm={12} md={6}>
          <div className="pro-col-img">
            <img
              style={{ height: "300px", width: "auto" }}
              src="https://brmgss.org/wp-content/uploads/2020/03/person1.jpg"
            ></img>
          </div>
        </Grid>

        <Grid item sm={12} md={6}>
          <div>
            <Typography variant="h5" gutterBottom>
              MESSAGE FROM OUR NATIONAL GENERAL SECRETARY
            </Typography>
            <p>
              इस व्यवस्था परिवर्तन की शुरूआत हमें स्वयं से करनी है। हम बदलेंगे
              तो युग बदलेगा, व्यवस्था बदलेगी | अपने लक्ष्यों व उददेश्यों को
              प्राप्त करने के लिए तन, मन, आत्मा, धन एवं पूरी उर्जा को अभी से लगा
              देना है एवं कड़े संघर्ष के लिए तैयार रहना है| इस सम्पूर्ण आंदोलन
              से जब सभी श्रमिक…
            </p>
            <Button variant="contained" color="primary">
              View More
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
