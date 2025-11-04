import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import DefaultTheme from './themes/Default'
import { ThemeProvider } from 'styled-components'
import './styles'
import GlobalReset, { Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalReset />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
