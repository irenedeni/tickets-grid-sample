import { createGlobalStyle  } from "styled-components"
import GraphikRegular from "./fonts/GraphikRegular.otf"
import GraphikMedium from "./fonts/GraphikMedium.otf"
import TrumpSoftProBold from "./fonts/TrumpSoftPro-Bold.woff"


interface ITheme {
  theme:  {
    text: string;
    white: string;
  };
}

const GlobalStyle = createGlobalStyle<ITheme>`
  @font-face {
    font-family: 'Graphik-Regular';
    src: url(${GraphikRegular}) format('opentype');
  }

  @font-face {
    font-family: 'Graphik-Medium';
    src: url(${GraphikMedium}) format('opentype');
  }

  @font-face {
    font-family: 'Trump-Bold';
    src: url(${TrumpSoftProBold}) format('woff');
  }

  @font-face {
    font-family: "Shentox"; 
    src: url("//db.onlinewebfonts.com/t/57acd77a5a43cb11d805162d859eac55.woff") format("woff"); 
  }

  body {
    margin: 0px;
    font-family: "Graphik-Regular";
    text-transform: uppercase;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.text};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Trump-Bold';
    font-weight: 700;
    margin: 0px;
    color: ${({ theme }) => theme.text};
  }

  a, a:hover, a:focus, a:active {
     text-decoration: none;
  }

  h6 {
    font-size: 24px;
    letter-spacing: 0.96px;
    text-align: center;
  }
`

export default GlobalStyle