import { useParams, useLocation, Switch, Route, useRouteMatch } from "react-router";
import styled from "styled-components";
import { fetchCoinInfo, fetchCoins, fetchCoinTickers } from "../api";
import { useQuery } from "react-query";

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
  background-color: #2d34366e;
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
    ["tickers", coinId], () => fetchCoinTickers(coinId)
  );
  //fetch작업
  const loading = infoLoading || tickersLoading;
  return (
    <Container>
      <Header>
        <Title>{state?.name ? state.name : loading? "Loading..." : infoData?.name}</Title>
        {/* inline 조건문의 중첩문 */}
        {/* state.name (항상 state가 존재해야함) // ?. -> 존재할 때만 */}
      </Header>
      {loading? <Loader>loading...</Loader> : null}
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
            <span></span>            
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
      </>
    </Container>    
  );
}

export default Coin;

//state 설정은 coins 페이지에서 클릭했을 때 나타난다.
//url로 직접 들어오면 에러가 난다.
//따라서 state구문에 inline 조건문 처리