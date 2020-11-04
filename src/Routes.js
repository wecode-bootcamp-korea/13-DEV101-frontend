import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import myPage from "./Pages/myPage/myPage";

const Routes = () => {
  return (
    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/myPage" component={myPage} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};

export default Routes;
