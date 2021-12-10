import Router from "./Router";
import { ThemeProvider, createGlobalStyle } from "styled-components";
//Reset.css component
import { ReactQueryDevtools } from "react-query/devtools"
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./routes/atoms";
import { useSetRecoilState } from "recoil";

const GlobalStyle  = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
  display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
  display: none;
  }
  body {
  line-height: 1.2;  
  }
  menu, ol, ul {
  list-style: none;
  }
  blockquote, q {
  quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  content: '';
  content: none;
  }
  table {
  border-collapse: collapse;
  border-spacing: 0;
  }
  //기본 Reset.css에서 추가
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .sidebar {
    padding: 0 20px;
    max-width: 500px;
    margin: 0 auto;
  }
  button {  
    border: 0px;
    border-radius: 10px;
    padding: 5px;
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.textColor};     
  }
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom(prev => !prev); 
  return (
    <>
      <ThemeProvider theme = {isDark? darkTheme : lightTheme}>
        <div className = "sidebar">
          <button onClick = {toggleDarkAtom}>{isDark? "Light mode" : "Dark mode"}</button>
        </div>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen = {true} />
      </ThemeProvider>      
    </>
  );
}
//상위 컴포넌트인 App.tsx에 다음 하위 컴포넌트인 Router.tsx연동
export default App;
