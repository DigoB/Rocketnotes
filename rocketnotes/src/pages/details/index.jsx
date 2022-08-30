import { Container, Links } from './styles.js'
import { Header } from '../../components/header'
import { Button } from '../../components/button'
import { Section } from '../../components/section'

export function Details() {

  return (
    <Container>
      <Header />

      <Section title="Links Úteis">
        <Links>
          <li><a href="#">Link 1</a></li>
        </Links>
      </Section>


      <Button title="Voltar"/>
    </Container>
  )
  
}