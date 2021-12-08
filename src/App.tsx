import GlobalStyle from "./components/GlobalStyle";
import Router from "./Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}
//상위 컴포넌트인 App.tsx에 다음 하위 컴포넌트인 Router.tsx연동
export default App;
