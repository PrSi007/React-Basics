import logo from './logo.svg';
import './App.css';
import * as react from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <react.Navbar bg="light" expand="lg" className="navc">
              <react.Navbar.Brand href="#home">Navbar</react.Navbar.Brand>
              <react.Navbar.Toggle aria-controls="basic-navbar-nav" />
              <react.Navbar.Collapse id="basic-navbar-nav">
                <react.Nav className="mr-auto">
                <react.Nav.Link href="#home">Home</react.Nav.Link>
                <react.Nav.Link href="#link">Link</react.Nav.Link>
                <react.NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <react.NavDropdown.Item href="#action/3.1">Action</react.NavDropdown.Item>
                  <react.NavDropdown.Item href="#action/3.2">Another action</react.NavDropdown.Item>
                  <react.NavDropdown.Item href="#action/3.3">Something</react.NavDropdown.Item>
                <react.NavDropdown.Divider />
              <react.NavDropdown.Item href="#action/3.4">Separated link</react.NavDropdown.Item>
            </react.NavDropdown>
            </react.Nav>
            <react.Form inline>
              <react.FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <react.Button variant="outline-success">Search</react.Button>
            </react.Form>
        </react.Navbar.Collapse>
      </react.Navbar>
    </div>
  );
}

export default App;
