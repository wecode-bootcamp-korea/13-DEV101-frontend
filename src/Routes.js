import React from "react";
// import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ClassCard from "./Components/ClassCard";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/common";

const Routes = () => {
  return (
    // <Provider>
    <ThemeProvider theme={theme}>
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route path="/" component={ClassCard} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
    // </Provider>
  );
};

export default Routes;
