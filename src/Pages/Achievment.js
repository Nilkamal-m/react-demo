import {
  CssBaseline,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import Marquee from "../component/Marquee";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { TopbarNavbar } from "../component/topbar_navbar/TopbarNavbar";
import "./Achievment.css";
import { Footerbar } from "../section/Footerbar";
import { Footer } from "../section/Footer";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "1.",
    "04.2003",
    "D.O.N0.2(12)",
    "मा0 अ्रम मंत्री, अपर निजी सचिव द्वारा",
    " मा0 श्रम मंत्री श्रमिक संघ एवं रेल विभाग के साथत्रिपक्षीय बैठक तय होने की सूचनार्थ |"
  ),

  createData(
    "2.",
    "05.11.2003",
    "D.O.No.M.15030(24)/03-LW",
    "मा० श्रम मंत्री द्वारा ",
    "मा0 रेल मंत्री को समाजिक सुरक्षा के तहत सैनिकों को सुविधाएं देने के बाबत पत्र ।"
  ),
  createData(
    "3.",
    "12.02.2004",
    "2(12)ADS/CM/2004",
    "मा0 श्रम मंत्री अपर निजी सचिव द्वारा",
    "RLC(C) पश्चिम बंगाल एवं CLC(C) M/O Labour/24/24.05.2004 नई दिल्‍ली को उपरोक्त संदर्भ में तुरंत कार्यवाही हेतु आदेश |"
  ),
  createData(
    "4.",
    "26.10.2003",
    "मा0 श्रम मंत्री द्वारा",
    "मा0 श्रम मंत्री द्वारा",
    `त्रिपक्षीय बैठक जिसमें रेलवे बोर्ड श्रम मंत्री एवं श्रमिक संघ के प्रतिनिधि शामिल हुए । 
      
     चर्चा में श्रम मंत्री द्वारा माल गोदाम श्रमिकों को मूलभूत सुविधा अविलंब उपलब्ध कराने का पत्र रेल विभाग को दिया गया |`
  ),
  createData(
    "5.",
    "24.02.2004",
    "",
    "मा0 श्रम मंत्री, अपर निजी सचिव द्वारा",
    "Joint CLC(C)M/O Labour,नई दिल्‍ली आदि को श्रमिकों हेतु बेसिक सुविधा दिलाने के बाबत पत्र |"
  ),
  createData(
    "6.",
    "24.02.2004",
    "D.O.No. TC-1-982004110 Part VII",
    "रेलवे बोर्ड EDTC(RATES) दवारा ",
    "मा0 श्रग मंत्री के अपर निजी सचिव को रेलवे माल गोदाम श्रमिकों को समाजिक सुरक्षा योजना के तहत रुविधा देने के बाबत पत्र द्वारा आश्वासन।"
  ),
  createData(
    "7.",
    "25.05.2004",
    "D.O.No. TC-1-98/304/10/ Part VII",
    "रेलवे बोर्ड EDTC(RATES) द्वारा",
    "सचिव (श्रम) श्रम मंत्री को माल गोदाम श्रमिकों के मांगों के बाबत रूचना |"
  ),
  createData(
    "8.",
    "25.05.2004",
    "TC-1/98/304/10/Part III",
    "EDTC(RATES) रेलवे बोड द्वारा",
    "श्रमिक संघ की कुछ मांगो को देने के बाबात महाप्रबंधक (भारतीय रेलवे) को आदेश |"
  ),
  createData(
    "9.",
    "24.08.2007",
    "M-21021/12/2007 RW",
    "DD,TC(RATES) रेलवे बोड द्वारा",
    "श्रमिक संघ को असंगठित क्षेत्र के मजदूरों को सामाजिक सुरक्षा योजना के तहत सुविधा दिए जाने के बाबत सूचना |"
  ),
  createData(
    "10.",
    "05.2008",
    "एस एम / विविध /5 / 08",
    " स्टेशन प्रबंधक पूर्वौत्तर रेलवे, परा द्वारा",
    "माल अधीक्षक छपरा को महाप्रबंधक के निर्दशा नुसार पहचान पत्र जारी करने का आदेश |"
  ),
  //   createData("11.", "", "", "", ""),
  //   createData("12.", "", "", "", ""),
  //   createData("13.", "", "", "", ""),
  //   createData("14.", "", "", "", ""),
  //   createData("15.", "", "", "", ""),
  //   createData("16.", "", "", "", ""),
  //   createData("17.", "", "", "", ""),
  //   createData("18.", "", "", "", ""),
  //   createData("19.", "", "", "", ""),
  //   createData("20.", "", "", "", ""),
  //   createData("21.", "", "", "", ""),
  //   createData("22.", "", "", "", ""),
  //   createData("23.", "", "", "", ""),
  //   createData("24.", "", "", "", ""),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
export const Achievment = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <TopbarNavbar />
      <Marquee />
      <div className="breadcrumbs-container">
        <Paper variant="elevation">
          <div style={{ padding: "30px" }}>
            <Typography variant="h4">Achievment</Typography>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link color="inherit" href="/" onClick={handleClick}>
                home
              </Link>
              <Typography color="textPrimary">Achievment</Typography>
            </Breadcrumbs>
          </div>
        </Paper>
      </div>
      <div>
        <div style={{ margin: "15px 50px" }}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    <Typography variant="h6">क्रमांक</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography variant="h6"> दिनांक</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography variant="h6">पत्रांक सख्या</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography variant="h6">
                      विभाग द्वारा आदेश / पत्राचार
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography variant="h6">
                      संक्षिप्त विषय / सूचनार्थ / आदेश
                    </Typography>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.protein}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <Footerbar />
      <Footer />
    </>
  );
};
