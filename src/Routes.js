import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Login from "./Pages/Login/Login";
import LoginAnother from "./Pages/Login/LoginAnother";
import SignUp from "./Pages/SignUp/SignUp";
import Nav from "./Components/Nav/Nav";
import PackageSelector from "./Pages/PackageSelector";
import Payment from "./Pages/Payment";
import CardPayment from "./Pages/CardPayment";
import Completed from "./Pages/Completed";
import theme from "./Styles/common";
import store from "./store/store";

const Routes = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          {/* <Nav /> */}
          <Switch>
            <Route
              exact
              path="/detail/:id/package"
              component={PackageSelector}
            />
            <Route exact path="/detail/:id/payment" component={Payment} />
            <Route
              exact
              path="/detail/:id/cardpayment"
              component={CardPayment}
            />
            <Route exact path="/detail/:id/completed" component={Completed} />
            <Route exact path="/" component={Nav} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/LoginAnother" component={LoginAnother} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default Routes;
