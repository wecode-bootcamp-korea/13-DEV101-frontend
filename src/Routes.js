import React from "react";
// import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ClassCard from "./Components/ClassCard";
import { ThemeProvider } from "styled-components";
import Login from "./Pages/Login/Login";
import LoginAnother from "./Pages/Login/LoginAnother";
import SignUp from "./Pages/SignUp/SignUp";
import Nav from "./Components/Nav/Nav";
import MyPage from "../src/Pages/MyPage/MyPage";
import theme from "./Styles/common";

const Routes = () => {
  return (
    // <Provider>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Nav} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/LoginAnother" component={LoginAnother} />
          <Route exact path="/myPage" component={MyPage} />
        </Switch>
      </Router>
    </ThemeProvider>
    // </Provider>
  );
};

export default Routes;
