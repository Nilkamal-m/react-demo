import React from "react";
import { BrmgssClint } from "./BrmgssClint";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Achievment } from "./Pages/Achievment";
import { Zone } from "./Pages/Zone";

export const BrmgssMain = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <BrmgssClint />
          </Route>
          <Route exact path="/achievment">
            <Achievment />
          </Route>
          <Route path="/zone">
            <Zone />
          </Route>
          <Route path="/committee"></Route>
          <Route path="/others"></Route>
          <Route path="/loginarea"></Route>
        </Switch>
      </Router>
    </>
  );
};
