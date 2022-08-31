import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Container, Form, Background } from './styles';

export function SignIn() {

    return (
        <Container>
            <Form>
                <h1>Rocketnotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                <h2>Faça seu login</h2>

                <Input 
                    placeholder="e-mail"
                    type="text"
                    icon={FiMail}
                />
                
                <Input 
                    placeholder="senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Entrar"/>

                <a href="#">Criar Conta</a>

            </Form>

            <Background />
        </Container>
    )
}