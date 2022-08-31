import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Container, Form, Background } from './styles';

export function SignIn() {

    return (
        <Container>
            <Form>
                <h1>Rocketnotes</h1>
                <p>Save and manage your usefull links</p>
                <h2>Login</h2>

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                
                <Input 
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Enter"/>

                <Link to="/register"> Register </Link>

            </Form>

            <Background />
        </Container>
    )
}