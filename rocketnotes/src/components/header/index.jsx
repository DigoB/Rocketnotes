import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./style";

export function Header() {
    
    return(
        <Container>
            <Profile to="/profile">
                <img 
                    src="https://github.com/DigoB.png"
                />

                <div>
                    <span>Welcome</span>
                    <strong>Rodrigo Braz</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
}