import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    light: '#eee',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
