import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { battlegroundRouting, homeRouting } from "./constant/routes";
import { MainPage } from "./page/MainPage";
import { BattlegroundPage } from "./page/BattlegroundPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={homeRouting} exact component={MainPage} />
        <Route path={battlegroundRouting} exact component={BattlegroundPage} />
        <Route path={"*"}>
          <Redirect to={homeRouting} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
