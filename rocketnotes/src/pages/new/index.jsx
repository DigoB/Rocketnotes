import { Header } from "../../components/header"
import { Input } from "../../components/input"
import { Textarea } from "../../components/textarea"
import { NoteItem } from "../../components/noteItem"
import { Section } from "../../components/section"
import { Button } from "../../components/button"
import { Container, Form } from "./styles"

export function New() {

    return (

        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <a href="/">Voltar</a>

                    </header>

                    <Input 
                        placeholder="Título"
                    />

                    <Textarea placeholder="Observações" />

                    <Section title="Links Úteis">
                        <NoteItem value="https://rocketseat.com.br"/>
                        <NoteItem isNew placeholder="Novo Link" />
                    </Section>

                    <Section title="Marcadores">

                        <div className="tags">
                            <NoteItem value="react"/>
                            <NoteItem isNew placeholder="Nova Tag" />
                        </div>

                    </Section>

                    <Button title="Salvar" />


                </Form>
            </main>

        </Container>
    )
}