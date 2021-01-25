import { CssBaseline } from "@material-ui/core";
import React from "react";
import Example from "./component/Example";
import { FloatingSocial } from "./component/FloatingSocial";
import Marquee from "./component/Marquee";
import Navbar from "./component/Navbar/Navbar";
import Topbar from "./component/Topbar";
import { TopbarNavbar } from "./component/topbar_navbar/TopbarNavbar";
import { FeatureColumn } from "./section/FeatureColumn";
import { Footer } from "./section/Footer";
import { Footerbar } from "./section/Footerbar";
import { LatestUpdate } from "./section/LatestUpdate";
import MapAndFooterLogo from "./section/MapAndFooterLogo";
import NoticeAllZoneColumn from "./section/NoticeAllZoneColumn";
import { NoticeColumn } from "./section/NoticeColumn";
import { ProfileColumn } from "./section/ProfileColumn";
import { WorkingZoneTable } from "./section/WorkingZoneTable";

export const BrmgssClint = () => {
  return (
    <>
      <CssBaseline />

      <TopbarNavbar />
      <Marquee />
      <Example />
      <FloatingSocial />
      <FeatureColumn />
      <NoticeColumn />
      <NoticeAllZoneColumn />
      <ProfileColumn />
      <WorkingZoneTable />
      <LatestUpdate />
      <MapAndFooterLogo />
      <Footerbar />
      <Footer />
    </>
  );
};
