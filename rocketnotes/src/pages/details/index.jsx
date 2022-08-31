import { Container, Links, Content } from './styles.js'
import { Header } from '../../components/header'
import { Button } from '../../components/button'
import { Section } from '../../components/section'
import { Tag } from '../../components/tag'
import { ButtonText } from '../../components/buttonText'

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius corrupti saepe, porro unde velit officiis molestias perferendis accusamus repellat, voluptas iste quis nisi deserunt eaque, ad vel vero nulla sunt reiciendis autem error aut! Voluptatibus est quod voluptatem odit aut, eos velit rem iste dolore harum maiores reiciendis iusto in repellendus dolores illo consectetur. Aspernatur, voluptas asperiores harum beatae animi illum. Atque autem aperiam vitae cumque maiores accusamus repellendus itaque facere! Reiciendis voluptates mollitia obcaecati impedit unde? Odio omnis quibusdam cumque ipsa delectus suscipit error nisi iste, inventore vel numquam voluptate amet consequatur nihil quas dolorum excepturi. Ab, soluta!</p>

          <Section title="Links Úteis">
            <Links>
              <li><a href="https://www.github.com/DigoB" target="_blank">https://github.com/DigoB</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="NodeJs" />
          </Section>

          <Button title="Voltar"/>

        </Content>
      </main>
    </Container>
  )
  
}