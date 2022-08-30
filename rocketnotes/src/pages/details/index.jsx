import { Container, Links } from './styles.js'
import { Header } from '../../components/header'
import { Button } from '../../components/button'
import { Section } from '../../components/section'
import { Tag } from '../../components/tag'

export function Details() {

  return (
    <Container>
      <Header />

      <Section title="Links Úteis">
        <Links>
          <li><a href="#">Link 1</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="Express" />
        <Tag title="NodeJs" />
      </Section>

      <Button title="Voltar"/>
    </Container>
  )
  
}