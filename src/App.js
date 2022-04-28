import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <Container>
        <Router>
          <AppRoutes />
        </Router>
      </Container>
    </div>
  );
}

export default App;
