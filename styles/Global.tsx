import {createGlobalStyle} from 'styled-components'
import {theme} from './theme'

export const GlobalStyle = createGlobalStyle<{theme: typeof theme}>`
  body {
    height: 100%;
    font-family: sans-serif;
    font-weight: 300;
    text-color: ${(props) => props.theme.colorText};
    margin: 0;
    background-color: ${(props) => props.theme.bgDefault};
    -webkit-print-color-adjust: exact !important;
    @media print {
      font-size: 14px;
    }
    @media screen {
      #page-container {
        max-width: 1000px;
        margin: 20px auto 0;
      }
    }
  }

  .text-bold {
    font-weight: bold;
  }
  .align-right{
    text-align: right;
  }
  .align-left{
    text-align: left;
  }
`
