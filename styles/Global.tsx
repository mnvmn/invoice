import {createGlobalStyle} from 'styled-components'
import {theme} from './theme'

export const GlobalStyle = createGlobalStyle<{theme: typeof theme}>`
  body {
    height: 100%;
    font-family: sans-serif;
    font-weight: 300;
    text-color: ${(props) => props.theme.textPrimary};
    margin: 0;
    background-color: ${(props) => props.theme.bgDefault};
    -webkit-print-color-adjust: exact !important;
  }
`
