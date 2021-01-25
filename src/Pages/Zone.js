import { CssBaseline, Typography } from "@material-ui/core";
import React from "react";
import { TopbarNavbar } from "../component/topbar_navbar/TopbarNavbar";

export const Zone = () => {
  return (
    <>
      <CssBaseline />
      <TopbarNavbar />
      <Typography>This is Zone page</Typography>
    </>
  );
};
