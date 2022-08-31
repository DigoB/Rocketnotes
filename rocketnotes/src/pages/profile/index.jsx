import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Container, Form, Avatar } from "./styles"
import { Input } from "../../components/input"
import { Button } from "../../components/button"

export function Profile() {

    return (

        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>

                <Avatar>
                    <img 
                        src="https://www.github.com/DigoB.png"
                        alt="User Photo"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input id="avatar" type="file" />
                    </label>
                </Avatar>

                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Current Password"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder="New Password"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Save" />

            </Form>
        </Container>
    )
}