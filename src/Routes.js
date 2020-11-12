import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Login from "./Pages/Login/Login";
import LoginAnother from "./Pages/Login/LoginAnother";
import SignUp from "./Pages/SignUp/SignUp";
import Main from "./Pages/Main/Main";
import MyPage from "../src/Pages/MyPage/MyPage";
import Footer from "./Components/Footer/Footer";
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
            <Route exact path="/" component={Main} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/LoginAnother" component={LoginAnother} />
            <Route exact path="/myPage" component={MyPage} />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default Routes;
