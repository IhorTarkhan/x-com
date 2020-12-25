import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { root, test } from "./constant/routes";
import { MainPage } from "./page/MainPage";
import { TestPage } from "./page/TestPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={root} exact component={MainPage} />
        <Route path={test} exact component={TestPage} />
        <Route path={"*"}>
          <Redirect to={root} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
