import { Container, Paper, Typography, Grid } from "@material-ui/core";
import React from "react";
import "./NoticeColumn.css";

export const NoticeColumn = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">
          Important Notice for all QR Card Holder{" "}
          <img
            src="https://brmgss.org/wp-content/uploads/2020/04/new.gif"
            style={{ height: "auto", width: "45px" }}
          ></img>
        </Typography>
        <div className="container">
          <div className="lines">
            <i class="fas fa-handshake"></i>
          </div>
        </div>

        <Paper style={{ backgroundColor: "#fffb33" }}>
          <div style={{ margin: "10px", padding: "10px" }}>
            <strong>एक आवश्यक सूचना:</strong>
            <br />
            <strong>
              भारतीय रेलवे माल गोदाम श्रमिक संघ की तरफ से सारे सदस्यों को यह
              सूचित किया जाता है, आपकी प्रोफाइल अपडेट करने के लिए अगर आपके
              रजिस्टर्ड मोबाइल पर मैसेज नहीं मिला या फिर आपका मोबाइल नंबर
              परिवर्तित हो गया है या फिर भारतीय रेलवे माल गोदाम श्रमिक संघ का
              सदस्यता लेने के समय आपने अपना मोबाइल नंबर दिया ही नहीं तो कृपया
              अपने लीडर के साथ संपर्क करें एवं उन्हें अपने समस्या के बारे में
              बताएं । आप हमारे ऑफिशियल ईमेल आईडी{" "}
            </strong>
          </div>
        </Paper>

        <Paper
          variant="outlined"
          square={false}
          style={{
            backgroundColor: "#ff321c",
            color: "#fff",
          }}
        >
          <div
            style={{
              margin: "10px",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">महत्वपूर्ण घोषणा</Typography>
            <br />
            <p>
              <strong>
                आवश्यक सूचना भारतीय रेलवे माल गोदाम श्रमिक संघ के तरफ से सदस्यता
                अपग्रेड करने का कार्य संपूर्ण रूप से निशुल्क है अगर किसी व्यक्ति
                या पदाधिकारी के द्वारा किसी प्रकार की राशि या चंदा लिया जाता है
                तो भारतीय रेलवे माल गोदाम श्रमिक संघ के तरफ से सख्त से सख्त
                कार्यवाही की जाएगी जरूरत पड़ने पर कानूनी कार्रवाई भी की जा सकती
                है.
              </strong>
            </p>
          </div>
        </Paper>
      </div>
    </Container>
  );
};
