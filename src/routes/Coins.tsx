import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
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
              {coin.name}
            </Link>
          </Coin> )}        
        </CoinsList>)
      }    
      
    </Container>
  );
}

export default Coins;