import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default Router;