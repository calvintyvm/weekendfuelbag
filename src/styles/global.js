import { injectGlobal } from 'styled-components';
import theme from './theme';

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #app {
    width: 100%;
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 0;
  }

  body {
    font-family: 'Roboto';
  }

  a,
  button {
    outline: none;
    border: none;
    background: transparent;
    text-decoration: none;
    color: ${theme.colorPrimary};
  }
  h1{
    font-family:'PT Sans';
    font-weight:bolder;
    color:white;
  }
  p{
    font-family:'PT Sans';
    font-weight:lighter;
  }
  main {
    text-align: center;
    position: absolute;
    top: 120px;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @import url('https://fonts.googleapis.com/css?family=PT+Sans:400,700');

  @font-face {
    font-family: 'Roboto';
    src: url('/assets/fonts/Roboto-Regular.woff2') format('woff2'),
      url('/assets/fonts/Roboto-Regular.woff') format('woff');
  }
  .autocomplete-dropdown-container{
    right: 65px;
    position: absolute;
    width: 400px;
    z-index: 1;
  }
`;
