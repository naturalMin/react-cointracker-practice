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

