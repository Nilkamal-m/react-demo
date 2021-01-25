import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import "./LatestUpdate.css";

const LatestUpdateItems = [
  {
    photoUrl:
      "https://brmgss.org/wp-content/uploads/2020/09/IMG-20200923-WA0000-e1600880423247.jpg",
    updateDate: "",
    title:
      "माननीय सांसद श्री जगदम्बिका पाल जी को संसद में बीआरएमजीएसएस कार्यकर्ताओं के दुःख और दुख को उजागर करने के लिए धन्यवाद।",
    containt:
      "22 सितंबर 2020 भारतीय रेलवे माल गोदाम श्रमिक संघ के लिए एक ऐतिहासिक दिन था सन 1998 से भारत के कोने कोने मे प्रत्येक माल गोदाम पर पैदल चलकर सारे श्रमिकों को जिन्होंने एकत्रित किया एवं 28 अक्टूबर 2003 का ऐतिहासिक त्रिपक्षीय बैठक जिनके आवेदन पर किया गया वह है हमारे भारतीय रेलवे माल गोदाम…",
    buttonText: "Read More",
  },
  {
    photoUrl: "https://brmgss.org/wp-content/uploads/2020/07/brmgss1.jpg",
    updateDate: "",
    title:
      "Today historical meet with our Honourable Labour Minister Shri Santosh Kumar Gangwar ji at Sharm Shakti Bhaban.",
    containt:
      "आज दिनांक 22 जुलाई 2020 को श्रम शक्ति भवन में माननीय श्रम मंत्री आदरणीय श्री संतोष गंगवार जी को लोकसभा सांसद माननीय श्री जगदंबिका पाल जी एवं आप के राष्ट्रीय प्रभारी के द्वारा भारतीय रेलवे माल गोदाम श्रमिक संघ परिवार के तरफ से आदरणीय श्रम मंत्री महोदय को मिलकर उनको धन्यवाद दिए उनका आभार प्रकट…",
    buttonText: "Read More",
  },
  {
    photoUrl: "https://brmgss.org/wp-content/uploads/2020/04/upd1.jpg",
    updateDate: "",
    title: "Supporting Govt. Step to control epidemic COVID-19",
    containt:
      "we would like to appreciate the strong steps taken by our government against the world epidemic COVID-19. As the Govt. of India taken decision to continue Railway goods wagons as emergency services in this lock down situation we appreciate that. We like to  draw your kind attention about the railway goods shed labours those who…",
    buttonText: "Read More",
  },
];

export const LatestUpdate = () => {
  return (
    <div className="latest-update-cont">
      <Grid container spacing={2}>
        {LatestUpdateItems.map((item, i) => (
          <Grid item md={4} sm={12}>
            <Paper>
              <div className="latest-update-paper">
                <img src={item.photoUrl} style={{ width: "100%" }}></img>
                <div className="paper-content">
                  <a>
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                  </a>
                  <strong>{item.containt}</strong>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "15px auto" }}
                  >
                    {item.buttonText}
                  </Button>
                </div>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
