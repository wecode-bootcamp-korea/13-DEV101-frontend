import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Creators from "./Pages/Creators";
import theme from "./Styles/common";
import store from "./store/store";

const Routes = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/creators" component={Creators} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default Routes;
