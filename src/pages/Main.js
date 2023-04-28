import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataContext.js";
import { useNavigate } from "react-router-dom";
import BookTile from "../components/BookTile.js";

function Main() {
  const data = useContext(DataContext);
  const navigate = useNavigate();
  const [category, setCategory] = useState("Hemmesi");
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  //const apiUrl = "http://127.0.0.1:8000";

  const downloadClick = (book) => {
    const http_file = data.download_url + book.id;
    console.log(http_file);
    fetch(http_file).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = book.filename;
        a.click();
      });
      //window.location.href = response.url;
    });
  };

  // Function to collect data
  const getData = async (data) => {
    const response = await fetch(data.api_url + "/categories/").then((response) =>
      response.json()
    );

    setCategories(response);
    const response2 = await fetch(data.api_url + "/books/").then((response2) =>
      response2.json()
    );

    setBooks(response2);
    //console.log(response2);
  };

  useEffect(() => {
    getData(data);
  },[]);
  return (
    <Container>
      <Row>
        <Col>
          <h4>{category}</h4>
        </Col>
      </Row>
      <Row style={{ marginBottom: "1em" }}>
        <Col>
          <Button
            onClick={() => {
              setCategory("Hemmesi");
            }}
            className="category_link"
          >
            Hemmesi
          </Button>
          {categories.length === 0 && <p>Loading</p>}
          {categories.map((v, i) => {
            return (
              <Button
                key={i}
                onClick={() => {
                  setCategory(v.title);
                }}
                className="category_link"
              >
                {v.title}
              </Button>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col className="tiles">
          {books.length === 0 && <p>Loading</p>}
          {books
            .filter((v) => {
              if (category === "Hemmesi") {
                return true;
              } else {
                return v.category === category;
              }
            })
            .map((v) => {
              return (
                <BookTile
                  key={v.id}
                  data={v}
                  onViewClick={() => {
                    navigate("/book/" + v.id);
                  }}
                  onDownloadClick={() => {
                    downloadClick(v);
                  }}
                />
              );
            })}
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
