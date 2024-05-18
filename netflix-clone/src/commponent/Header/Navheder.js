import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nitflix from "../../Asset/Images/Nitflix.png";
import "./Header.css";
function NavSection() {
  return (
    <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand className="navLink" href="#home">
              <img src={Nitflix} alt="Netflix Logo" width="90" />
            </Navbar.Brand>

            <div className=" DropDown ">
              <NavDropdown title="Browse" id="basic-nav-dropdown">
                <div className="DropDownContent">
                  <NavDropdown.Item href="/home">
                    <p>Home </p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/tvshow">
                    <p>TVShows</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/movies">
                    <p>Movies</p>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/new&popular">
                    <p> New & Popular</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/mylist">
                    <p>My List</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/browsebylanguages">
                    <p>Browse by Languages</p>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavSection;
