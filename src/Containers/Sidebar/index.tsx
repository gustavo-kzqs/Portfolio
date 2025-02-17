import Avatar from '../../Components/Avatar'
import Paragrafo from '../../Components/Paragrafos'
import Title from '../../Components/Title'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Gustavo Siqueira</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        gustavo-kzqs
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        FullStack Phyton
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
