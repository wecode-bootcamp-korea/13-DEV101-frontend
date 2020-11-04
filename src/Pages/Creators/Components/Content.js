import React from "react";
import Styled from "styled-components";
import Intro from "../Chapter/Intro";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const Content = () => {
  return (
    <Wrap>
      <Router>
        <Switch>
          <Route path="/creators/intro" component={Intro} />
        </Switch>
      </Router>
    </Wrap>
  );
};

export default Content;

const Wrap = Styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1 0%;
  max-width: 986px;
  text-align: left;
  width: 100%;
  div {
    width: 100%;
  }
`;
