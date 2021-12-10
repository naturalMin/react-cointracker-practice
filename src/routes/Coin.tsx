import { useParams, useLocation, Switch, Route, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Chart from "./Chart";
import Price from "./Price";
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";

//css
const Container = styled.div`
  padding: 0 20px;
  max-width: 500px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: ${props => props.theme.textColor};
  font-size: 50px;
`;
const Loader = styled.div`
  text-align: center;
  display: block;
`;
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #dfe6e975;
  padding: 10px 20px;
  border-radius: 10px; 
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0;
`;
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;
const Tab = styled.span<{isActive : boolean}>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.theme.textColor};
  padding: 7px 0px;
  border-radius: 10px;
  background-color: ${props => props.isActive ?
    props.theme.accentColor : `#dfe6e975`};
  a {
    display: block;
  }
`;
const Back = styled.div`
  text-align: center;
  font-size: 12px;
  width: 50px;  
  background-color: ${props=> props.theme.accentColor};
  border-radius: 10px;
  margin-top: 10px;
  padding: 7px 10px;  
  a {
    color: ${props=> props.theme.textColor};
    display: block;
  }
`;

//type 
interface RouteParams {
  coinId: string,
}
interface RouteState {
  name: string,
}
interface InfoData {
  id : string;
  name : string;
  symbol : string;
  rank : number;
  is_new : boolean;
  is_active : boolean;
  type : string;
  contract : string;
  platform : string;
  description : string;
  message : string;
  open_source : boolean;
  started_at : string;
  development_status : string;
  hardware_wallet : boolean;
  proof_type : string;
  org_structure : string;
  hash_algorithm : string;
  first_data_at : string;
  last_data_at : string;
}
interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  //quotes: object;
  quotes : {
    USD: {
      ath_date: string
      ath_price: number
      market_cap: number
      market_cap_change_24h: number
      percent_change_1h: number
      percent_change_1y: number
      percent_change_6h: number
      percent_change_7d: number
      percent_change_12h: number
      percent_change_15m: number
      percent_change_24h: number
      percent_change_30d: number
      percent_change_30m: number
      percent_from_price_ath: number
      price: number
      volume_24h: number
      volume_24h_change_24h: number
    }    
  }
}
//quotes 내부에 필요한 USD 가격정보가 있으므로 직접적으로 호출(console값 복사)

function Coin() {
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>()
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");
  //useRouteMatch : 클릭한 탭 속에 들어가있는 여부를 알려줌
  const {isLoading: infoLoading, data: infoData} = useQuery<InfoData>
  (["info", coinId], () => fetchCoinInfo(coinId));
  const {isLoading: tickersLoading, data: tickerData} = useQuery<PriceData>(
    ["tickers", coinId], () => fetchCoinTickers(coinId), {
      refetchInterval: 5000,
    }
  );
  //fetch작업
  //2개의 api호출 - 동일한 coinId가 매개, 구분을 위해 배열 첫번째 key로 설정
  //js syntax를 통해 return값을 가져옴 ex. infoData, tickerData
  const loading = infoLoading || tickersLoading;
  return (
    <Container>
      <Back>
          <Link to = "/">Back</Link>
      </Back>
      <Helmet>
        <title>{state?.name ? state.name : loading? "Loading..." : infoData?.name}</title>
      </Helmet>
      <Header>                
        <Title>{state?.name ? state.name : loading? "Loading..." : infoData?.name}</Title>
        {/* inline 조건문의 중첩문 */}
        {/* state.name (항상 state가 존재해야함) // ?. -> 존재할 때만 */}
      </Header>
      
      {loading? <Loader>loading...</Loader> : 
        <>
        <Overview>
          <OverviewItem>
            <span>Rank: </span>
            <span>{infoData?.name}</span>            
          </OverviewItem>
          <OverviewItem>
            <span>Symbol: </span>
            <span>{infoData?.symbol}</span>            
          </OverviewItem>
          <OverviewItem>
            <span>price: </span>
            <span>${tickerData?.quotes.USD.price.toFixed(3)}</span>            
          </OverviewItem>
        </Overview>
        <Description>
          {infoData?.description}
        </Description>
        <Overview>
          <OverviewItem>
            <span>Total Supply: </span>
            <span>{tickerData?.total_supply}</span>            
          </OverviewItem>
          <OverviewItem>
            <span>Max Supply: </span>
            <span>{tickerData?.max_supply}</span>            
          </OverviewItem>
        </Overview>
        <Tabs>
          <Tab isActive = {chartMatch !== null}>
            <Link to = {`/${coinId}/chart`}>Chart</Link>
          </Tab>
          <Tab isActive = {priceMatch !== null}>
            <Link to = {`/${coinId}/price`}>Price</Link>
          </Tab>
        </Tabs>
        {/* Routing */}
        <Switch>          
          <Route path= {`/:coinId/price`}>
            <Price />
          </Route>
          <Route path= {`/:coinId/chart`}>
            <Chart coinId = {coinId} />
          </Route>
        </Switch>
      </>
      }      
    </Container>    
  );
}

export default Coin;

//state 설정은 coins 페이지에서 클릭했을 때 나타난다.
//url로 직접 들어오면 에러가 난다.
//따라서 state구문에 inline 조건문 처리