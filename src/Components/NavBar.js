import '../App.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white" fixed="top" >
            <Container>
                <Navbar.Brand href="#home">
                    <Container>
                    <img
                        src='../assets/img/logo/favicon-96x96.png'
                        width="100px"
                        height="100px"
                    />
                        Biconcretos
                    </Container>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Proyectos</Nav.Link>
                        <Nav.Link href="#pricing">Nosotros</Nav.Link>
                        <NavDropdown title="Servicios" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;