import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
//css
const Container = styled.div`
  padding: 0 20px;
  max-width: 500px;
  margin: 0 auto;
`;
const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`  
  color: ${props => props.theme.textColor};
  padding: 20px;
  border: 1px solid ${props => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: block;
    text-align: center;
    font-size: 20px;    
  }
  &:hover {
    color: ${props => props.theme.accentColor};
    font-weight: bold;
    border-bottom: 5px solid ${props => props.theme.accentColor};
  }
`;
const Title = styled.h1`
  color: ${props => props.theme.textColor};
  font-size: 50px;
`;
const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
//coins api type
interface Icoins {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type : string 
} 
//coin top 50위 리스트 호출
function Coins () {
  const { isLoading, data } = useQuery<Icoins[]>("allCoins", fetchCoins);
  return(
    <Container>
      <Helmet>
        <title>Coins</title>
      </Helmet>
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ? "Loading..." : 
        (<CoinsList>
          {data?.slice(0, 50).map(coin => 
          <Coin key = {coin.id} >
            <Link to = {{
                pathname: `./${coin.id}`, 
                state: {
                  name: coin.name
                  }
                }}>
              <Img src = {`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
              {coin.name}
            </Link>
          </Coin> )}        
        </CoinsList>)
      }    
      
    </Container>
  );
}

export default Coins;