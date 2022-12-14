import type {AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components'
import {GlobalStyle} from '../styles/Global'
import '../styles/globals.css'
import {theme} from '../styles/theme'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
