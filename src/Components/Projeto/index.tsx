import Paragrafo from '../Paragrafos'
import Title from '../Title'

import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Title>Projeto Lista de tarefas</Title>
      <Paragrafo tipo="secundario">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
        inventore alias distinctio voluptas reiciendis quia animi, aut ut
        deleniti assumenda neque accusantium exercitationem quasi quas
        recusandae tenetur ex reprehenderit. Error.
      </Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
