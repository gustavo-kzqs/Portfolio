import Title from '../../Components/Title'
import Paragrafo from '../../Components/Paragrafos'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sunt veniam
      reprehenderit placeat quas dolor eum libero odio, ex ab qui nam architecto
      eligendi quisquam nobis minus. Expedita, omnis soluta.
    </Paragrafo>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=gustavo-kzqs&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gustavo-kzqs&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default Sobre
