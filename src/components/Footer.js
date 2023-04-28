import { Container, Row, Col } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

export default function Footer() {
    return (
        <Container>
            <Row>
                <Col><Navbar>&copy; ylymbilim.com</Navbar></Col>
            </Row>
        </Container>
    );
}