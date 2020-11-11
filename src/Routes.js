import React from "react";
// import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
<<<<<<< HEAD
import { Provider } from "react-redux";
=======
>>>>>>> 3b9bad89b432239e23632a34aa6595ff960c8d60
import { ThemeProvider } from "styled-components";
import Login from "./Pages/Login/Login";
import LoginAnother from "./Pages/Login/LoginAnother";
import SignUp from "./Pages/SignUp/SignUp";
import Nav from "./Components/Nav/Nav";
import Main from "./Pages/Main/Main";
import MyPage from "../src/Pages/MyPage/MyPage";
import theme from "./Styles/common";
import Detail from "./Pages/Detail";
import store from "./store/store";
const Routes = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/LoginAnother" component={LoginAnother} />
            <Route exact path="/myPage" component={MyPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default Routes;
