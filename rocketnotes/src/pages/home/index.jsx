import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from '../../components/header'
import { ButtonText } from '../../components/buttonText'
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Note } from "../../components/note";
import { FiPlus, FiSearch } from 'react-icons/fi'

export function Home() {

    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li> <ButtonText title="Todos" isActive /> </li>
                <li> <ButtonText title="React"/> </li>
                <li> <ButtonText title="Nodejs"/> </li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>

            </Search>

            <Content>
                <Section title="Minhas Notas">

                    <Note data={{
                        title: 'React',
                         tags: [
                            {id: '1', name: 'react'},
                            {id: '2', name: 'nodejs'}
                        ]
                        }} 
                    />
                    <Note data={{
                        title: 'Javascript',
                         tags: [
                            {id: '3', name: 'javascript'},
                            {id: '4', name: 'html'}
                        ]
                        }} 
                    />
                    <Note data={{
                        title: 'Nodejs',
                         tags: [
                            {id: '5', name: 'npm'},
                            {id: '6', name: 'express'}
                        ]
                        }} 
                    />
                    <Note data={{
                        title: 'Web Develop',
                         tags: [
                            {id: '7', name: 'spa'},
                            {id: '8', name: 'mobile-first'}
                        ]
                        }} 
                    />
                    <Note data={{
                        title: 'Front',
                         tags: [
                            {id: '1', name: 'html5'},
                            {id: '2', name: 'css3'}
                        ]
                        }} 
                    />

                </Section>

            </Content>

            <NewNote to="/new">
                Criar Nota
                <FiPlus />

            </NewNote>

        </Container>
    )
}

