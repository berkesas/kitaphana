import { Image, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { DataContext } from "../DataContext.js";

function NavPanel() {
  const data = useContext(DataContext);
  return (
    <>
      <Navbar bg="white" variant="light" expand="lg" expanded="false">
        <Container>
              <Navbar.Brand href={process.env.PUBLIC_URL}><Image src={process.env.PUBLIC_URL+'/logo_kitaphana.png'}/></Navbar.Brand>
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
