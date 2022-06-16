import { Navbar, Nav, Container } from 'react-bootstrap'
import { ButtonGroup, Dropdown, Button } from 'react-bootstrap'
import { BsCartFill } from 'react-icons/bs';

export default function NavBar({ count }) {

    return (
        <Navbar bg="light" variant="light">
            <Container className="py-2">
                <Navbar.Brand href="#">
                    <h3 className="fw-bold">Start Bootstrap</h3>
                </Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Dropdown as={ButtonGroup}>
                    <Button variant="outline-dark" size="lg">
                        <b> Cart </b>
                        <span class="badge badge-pill badge-dark">{count}</span>
                        <BsCartFill style={{ fontSize: 25 }} />
                    </Button>
                </Dropdown>
            </Container>
        </Navbar>
    )
}