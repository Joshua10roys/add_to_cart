import { Navbar, Nav, Container } from 'react-bootstrap'
import { ButtonGroup, Dropdown, Button } from 'react-bootstrap'
import { BsCartFill } from 'react-icons/bs';

export default function NavBar({ count }) {

    return (
        <Navbar bg="light" variant="light">
            <Container className="py-2">
                <h3 className="fw-bold">Start Bootstrap</h3>
                <Nav className="mr-auto">
                </Nav>
                <Dropdown as={ButtonGroup}>
                    <Button variant="outline-dark" size="lg"><BsCartFill style={{ fontSize: 25 }} /><b> Cart {count}</b></Button>
                </Dropdown>
            </Container>
        </Navbar>
    )
}