import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar className="bg-body-tertiary mt-4">
      <Container>
        <Navbar.Brand href="#home">WebEye</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            An Artificial Intelligence Model made by: <a href="https://github.com/TC3002B-AI-project">Equipo 6</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;