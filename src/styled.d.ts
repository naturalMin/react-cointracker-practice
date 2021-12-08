// import original module declarations
import 'styled-components';
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
      textColor : string;
      bgColor : string;
      accentColor : string;
  }
}
//우리가 사용하는 style들의 type
//https://styled-components.com/docs/api#typescript -> 코드 출처