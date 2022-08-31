import { Link } from 'react-router-dom';
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
                        <h1>New Note</h1>
                        <Link to="/">Back</Link>

                    </header>

                    <Input 
                        placeholder="Title"
                    />

                    <Textarea placeholder="Other informations" />

                    <Section title="Usefull links">
                        <NoteItem value="https://rocketseat.com.br"/>
                        <NoteItem isNew placeholder="Novo Link" />
                    </Section>

                    <Section title="Tags">

                        <div className="tags">
                            <NoteItem value="react"/>
                            <NoteItem isNew placeholder="Nova Tag" />
                        </div>

                    </Section>

                    <Button title="Save" />


                </Form>
            </main>

        </Container>
    )
}