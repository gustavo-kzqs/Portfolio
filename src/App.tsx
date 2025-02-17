import Projetos from './Containers/Projetos'
import Sidebar from './Containers/Sidebar'
import Sobre from './Containers/Sobre'
import EstiloGlobal, { Container } from './Styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
