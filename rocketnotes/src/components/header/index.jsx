import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./style";

export function Header() {
    
    return(
        <Container>
            <Profile>
                <img 
                    src="https://github.com/DigoB.png"
                />

                <div>
                    <span>Bem vindo</span>
                    <strong>Rodrigo Braz</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
}