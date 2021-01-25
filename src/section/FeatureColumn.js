import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  Container: {
    display: "flex",
    paddingRight: "15px",
  },
  paper: {
    height: "320px",
  },
});

export const FeatureColumn = () => {
  const classes = useStyles();
  const SectionInfo = [
    {
      hader: "लक्ष्य",
      paragraph:
        "श्रमिक संघ आन्दोलन के मुख्य लक्ष्य हैं :  रेलवे माल गोदाम श्रमिकों का राष्ट्रहित में रेलवे में स्थाइकरण करना। श्रमिकों के घर को बेरोजगारी, गरीबी, भूख, अभाव व अशिक्षा से मुक्त करना, स्वस्थ, समृद्ध संस्कारवान व शक्तिशाली भारत का निर्माण करना |",
      color: "#87cc00",
    },
    {
      hader: "मुख्य मांग",
      paragraph:
        " रेलवे माल गोदाम में काम करने वाले श्रमिकों का सरकारीकरण किया जाए | Substitute के आधार पर ग्रुप डी के रेल महाप्रबन्धकों व ग्रुप सी के लिए रेलवे बोर्ड में जमा श्रमिकों के दस्तावेजों को अविलम्ब नियुकक्‍त किया जाए।",
      color: "#fd5308",
    },
    {
      hader: "आन्दोलन की मूल भावना",
      paragraph:
        "देश के लगभग 6 लाख 85 हजार रेलवे माल गोदाम श्रमिक जिसमें माँ, बहन, बेटियां, भाई व बुजुर्ग सभी जाति के लोग हमारे स्वजन हैं | इस सभी के आरोग्य, सुख, समृद्धि, सम्मान, स्वाभिमान व आजादी के लिए संघर्ष करना संघ अपना नैतिक, समाजिक, दायित्व मानता है | इस मिशन का मुख्य लक्ष्य श्रमिकों के…",
      color: "#00adef",
    },
  ];

  return (
    <div>
      <Grid container className={classes.Container}>
        {SectionInfo.map((item, i) => (
          <Grid item xs={12} sm={4} style={{ paddingLeft: "15px" }}>
            <Paper
              className={classes.paper}
              style={{ background: `${item.color}`, color: "#fff" }}
            >
              <div style={{ margin: "10px", padding: "10px" }}>
                <h2>{item.hader}</h2>
                <p>{item.paragraph}</p>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
