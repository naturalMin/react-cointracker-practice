import { HashRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {/* 각 코인들 상세페이지 routing */}
        <Route path = "/:coinId">
          <Coin />
        </Route>
        {/* 코인 top 50 list routing */}
        <Route path = "/">
          <Coins />
        </Route> 
      </Switch>
    </HashRouter>
  );
}

export default Router;