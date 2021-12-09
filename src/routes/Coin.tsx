import { useParams, useLocation } from "react-router";
import { useState } from "react";
import styled from "styled-components";

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

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>()
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading? <Loader>loading...</Loader> : null}
      <>
        <Overview>
          <OverviewItem>
            <span>Rank: </span>
            <span></span>            
          </OverviewItem>
          <OverviewItem>
            <span>Symbol: </span>
            <span></span>            
          </OverviewItem>
          <OverviewItem>
            <span>price: </span>
            <span></span>            
          </OverviewItem>
        </Overview>
        <Description></Description>
        <Overview>
          <OverviewItem>
            <span>Total Supply: </span>
            <span></span>            
          </OverviewItem>
          <OverviewItem>
            <span>Max Supply: </span>
            <span></span>            
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