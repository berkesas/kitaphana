import { Row, Col, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { DataContext } from "../DataContext.js";

function NavPanel() {
  const data = useContext(DataContext);
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" expanded="false">
        <Container>
              <Navbar.Brand href="/">{data.title}</Navbar.Brand>
              <Nav className="me-auto">
                {data.menus.map((v) => {
                  return (
                    <Nav.Link as={Link} key={v.key} to={v.href}>
                      {v.text}
                    </Nav.Link>
                  );
                })}
              </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavPanel;
