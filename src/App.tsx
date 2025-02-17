import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './Containers/Projetos'
import Sidebar from './Containers/Sidebar'
import Sobre from './Containers/Sobre'
import EstiloGlobal, { Container } from './Styles'
import TemaLight from './Themes/light'
import TemaDark from './Themes/dark'

function App() {
  const [UsaDark, setUsaDark] = useState(false)

  function trocaTema() {
    setUsaDark(!UsaDark)
  }
  return (
    <ThemeProvider theme={UsaDark ? TemaDark : TemaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
