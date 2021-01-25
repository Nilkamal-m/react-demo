import { Button, Container, Paper, Typography } from "@material-ui/core";
import React from "react";
import "./NoticeAllZoneColumn.css";

const NoticeAllZoneColumn = () => {
  return (
    <div className="all-zon-container">
      <Typography variant="h4" gutterBottom>
        Important Notice for all Zonal and Division committee
        <img
          src="https://brmgss.org/wp-content/uploads/2020/04/new.gif"
          style={{ height: "auto", width: "45px" }}
        ></img>
      </Typography>
      <Paper style={{ width: "100%", backgroundColor: "#00c3ff" }}>
        <Container maxWidth="sm">
          <div className="all-zone-paper-cont">
            <Typography variant="h6" gutterBottom>
              भारतीय रेलवे माल गोदाम श्रमिक संघ के प्रत्येक जोनल एवं डिवीजन स्तर
              के पदाधिकारियों को यह सूचित किया जाता है भारत सरकार के आदेश अनुसार
              कृपया अपने-अपने जॉन एवं डिवीजन स्तर में रेलवे माल गोदाम पर काम
              करने वाले अंतर राज्य श्रमिकों का एक सूची भारत सरकार से दिए गए
              फॉर्मेट के अनुसार अपने अपने क्षेत्र के Dy.CLC / RLC (c) को जमा
              करें । ताकि रेलवे माल गोदाम में काम करने वाले अंतर राज्य श्रमिकों
              को सरकार की तरफ से घोषित सुविधाएं उपलब्ध करवाया जा सके । सरकारी
              निर्देश एवं सूची तैयार करने की फॉर्मेट इस सूचना के नीचे दिए गए हैं
              ।
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "10px" }}
            >
              Download Link
            </Button>
          </div>
        </Container>
      </Paper>
    </div>
  );
};

export default NoticeAllZoneColumn;
