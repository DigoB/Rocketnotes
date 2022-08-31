import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Container, Form, Background } from './styles';

export function SignUp() {

    return (
        <Container>

            <Background />

            <Form>
                <h1>Rocketnotes</h1>
                <p>Save and manage your usefull links</p>
                <h2>Create account</h2>

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                />
                
                <Input 
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Register"/>

                <Link to="/">Back to login</Link>

            </Form>

        </Container>
    )
}