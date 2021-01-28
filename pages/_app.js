import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Gilroy-Light';
    src: url('/webFonts/Gilroy-Light/font.woff2') format('woff2'), url('/webFonts/Gilroy-Light/font.woff') format('woff');
  }

  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 10px;
  }

  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gilroy-Light', sans-serif;
  }
`

const theme = {
  colors: {
    primary: '#E70009',
    secondary: '#9F5A5C',
    light: '#e8ebee',
    lighter: '#fafeff',
    midtone: '#d6d6e0',
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
