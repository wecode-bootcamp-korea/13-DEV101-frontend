import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Login from "./Pages/Login/Login";
import LoginAnother from "./Pages/Login/LoginAnother";
import SignUp from "./Pages/SignUp/SignUp";
import Main from "./Pages/Main/Main";
import MyPage from "../src/Pages/MyPage/MyPage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import theme from "./Styles/common";
import Detail from "./Pages/Detail";
import store from "./store/store";
import Nav from "./Components/Nav/Nav";
import PackageSelector from "./Pages/PackageSelector";
import Payment from "./Pages/SearchPage";
import CardPayment from "./Pages/CardPayment";
const Routes = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/" component={Main} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/LoginAnother" component={LoginAnother} />
            <Route exact path="/myPage" component={MyPage} />
            <Route exact path="/searchPage/" component={SearchPage} />
            <Route exact path="/searchPage/:searchVal" component={SearchPage} />
            <Route exact path="/detail/:id/package" component={PackageSelector} />
            <Route exact path="/detail/:id/payment" component={Payment} />
            <Route exact path="/detail/:id/cardpayment" component={CardPayment} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/LoginAnother" component={LoginAnother} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default Routes;
