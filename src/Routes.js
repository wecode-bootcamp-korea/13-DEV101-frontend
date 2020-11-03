import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/common";
import Detail from "./Pages/Detail";
import store from "./store/store";
const Routes = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/detail/:id" component={Detail} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default Routes;
