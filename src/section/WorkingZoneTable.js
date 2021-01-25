import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Typography } from "@material-ui/core";

const TableList = [
  {
    slNo: 1,
    zoneName: "CENTRAL RAILWAY",
    viewDivision: "Division List",
    viewDivisionLink: "#",
    viewGodshed: "Googs Shed List",
    viewGodshedLink: "#",
  },
  {
    slNo: 2,
    zoneName: "EASTERN RAILWAY",
    viewDivision: "Division List",
    viewDivisionLink: "#",
    viewGodshed: "Googs Shed List",
    viewGodshedLink: "#",
  },
  {
    slNo: 3,
    zoneName: "NORTHERN RAILWAY",
    viewDivision: "Division List",
    viewDivisionLink: "#",
    viewGodshed: "Googs Shed List",
    viewGodshedLink: "#",
  },
  {
    slNo: 4,
    zoneName: "NORTH EASTERN RAILWAY",
    viewDivision: "Division List",
    viewDivisionLink: "#",
    viewGodshed: "Googs Shed List",
    viewGodshedLink: "#",
  },
  {
    slNo: 5,
    zoneName: "NORTHEAST FRONTIER RAILWAY",
    viewDivision: "Division List",
    viewDivisionLink: "#",
    viewGodshed: "Googs Shed List",
    viewGodshedLink: "#",
  },
  {
    slNo: 6,
    zoneName: "SOUTHERN RAILWAY",
    viewDivision: "Division List",
    viewDivisionLink: "#",
    viewGodshed: "Googs Shed List",
    viewGodshedLink: "#",
  },
  {
    slNo: 7,
    zoneName: "SOUTH CENTRAL RAILWAY",
    viewDivision: "Division List",
    viewDivisionLink: "#",
    viewGodshed: "Googs Shed List",
    viewGodshedLink: "#",
  },
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("1", "CENTRAL RAILWAY", "Division List", "Googs Shed List"),
  createData("2", "EASTERN RAILWAY", "Division List", "Googs Shed List"),
  createData("3", "NORTHERN RAILWAY", "Division List", "Googs Shed List"),
  createData("4", "NORTH EASTERN RAILWAY", "Division List", "Googs Shed List"),
  createData(
    "5",
    "NORTHEAST FRONTIER RAILWAY",
    "Division List",
    "Googs Shed List"
  ),
  createData("6", "SOUTHERN RAILWAY", "Division List", "Googs Shed List"),
  createData("7", "SOUTH CENTRAL RAILWAY", "Division List", "Googs Shed List"),
];
export const WorkingZoneTable = () => {
  const classes = useStyles();
  return (
    <div>
      {/* <table border="1" cellSpacing="0">
        <tr>
          <th>Sl No</th>
          <th>Zone Name</th>
          <th>View Division</th>
          <th>View Godshed</th>
        </tr>
        {TableList.map((item, i) => (
          <tr>
            <td>{item.slNo}</td>
            <td>{item.zoneName}</td>
            <td>{item.viewDivision}</td>
            <td>{item.viewGodshed}</td>
          </tr>
        ))}
      </table> */}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h5">Sl No</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h5">Zone Name</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h5">View Division</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h5">View Godshed</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">
                  <Button variant="outlined" color="secondary">
                    {row.fat}
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button variant="outlined" color="secondary">
                    {row.carbs}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
