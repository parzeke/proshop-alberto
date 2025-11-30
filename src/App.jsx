import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

function App() {
  return (
    <div>
      {/* Header con Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {/* Logo o nombre de la tienda */}
          <Navbar.Brand href="/">Mi Tienda</Navbar.Brand>

          {/* Links de navegación a la derecha */}
          <Nav className="ms-auto">
            <Nav.Link href="/cart">
              <FaShoppingCart style={{ marginRight: '5px' }} />
              Carrito
            </Nav.Link>
            <Nav.Link href="/login">
              <FaUser style={{ marginRight: '5px' }} />
              Usuario
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Contenido principal */}
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Hola mundo</h1>
        <p>¡Tu Navbar y los iconos funcionan correctamente!</p>
      </main>
    </div>
  );
}

export default App;
