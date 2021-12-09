const BASE_URL = `https://api.coinpaprika.com/v1`

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`)
  .then((response) => response.json()
  );
}
//Coins api호출
export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`)
  .then((response) => response.json()
  );
}
//Coin - info api호출
export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`)
  .then((response) => response.json()
  );
}
//Coin - Ticker api호출
export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2; //2주 전
  return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`)
  .then((response) => response.json()
  ); 
}  
//Coin Chart api호출
