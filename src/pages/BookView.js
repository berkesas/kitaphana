import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../DataContext.js";
import { useParams } from "react-router-dom";
import { Image } from "react-bootstrap";

export default function BookView() {
  const data = useContext(DataContext);
  const { bookNumber } = useParams();
  const [book, setBook] = useState(null);

  // Function to collect data
  const getData = async (data) => {
    const response = await fetch(process.env.REACT_APP_API_URL + "/books/" + bookNumber).then(
      (response) => response.json()
    );

    setBook(response);
    // console.log(response);
  };

  useEffect(() => {
    getData(data);
  },[]);

  return (
    <Container>
      <Row>
        <Col md={6} sm={12}>
          {book && (
            <Image
              src={book.picture}
              rounded
              fluid
            />
          )}
        </Col>
        <Col md={6} sm={12}>
          {book && (
            <>
              <h2>{book.title}</h2>
              <p>{book.description}</p>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}
