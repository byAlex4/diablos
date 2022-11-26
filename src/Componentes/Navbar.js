import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navegacion() {
    return (
        <>
            <header>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand as={Link} to= "/">
                            <img src="https://footballscoop.com/.image/t_share/MTgwODU1NDI5NTE3NDE5NjA4/arizona-state-sun-devils-wordmark.png"
                                border="0" width="180" alt="Logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to= "/">Inicio</Nav.Link>
                                <Nav.Link as={Link} to= "/productos">Productos</Nav.Link>
                                <Nav.Link as={Link} to= "/galeria">Galeria</Nav.Link>
                                <NavDropdown title="Avisos" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Aviso de privacidad</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Aviso de cookies
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Aspectos legales
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Link as={Link} to= "/login">
                                <img 
                                src="https://www.transparentpng.com/thumb/user/single-user-icon-png-free--rLHSHx.png"
                                alt='login'    style={{ maxHeight: '35px' }} />
                            </Link>

                            <Link as={Link} to= "/carrito">
                                <img 
                                src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-cart-icon.png"
                                alt='carrito'    style={{ maxHeight: '35px' }} />
                            </Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <section>
                <Outlet></Outlet>
            </section>

            <footer style={{backgroundColor: "#313941", paddingTop: "2%"}}>
                <div>
                    Hola
                </div>
            </footer>
        </>
    );
}

export default Navegacion;