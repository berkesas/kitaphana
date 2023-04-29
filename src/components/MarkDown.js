import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'

function MarkDown(props) {
  const [marked, setMarked] = useState();
  const { pageName } = useParams();
  const pageFile = require("../data/" + pageName + ".md");
  useEffect(() => {
    fetch(pageFile)
      .then((res) => res.text())
      .then((text) => setMarked(text));
  }, [pageName]);
  return (
    <Container>
      <Row>
        <Col>
          <ReactMarkdown remarkPlugins={[gfm]}>{marked}</ReactMarkdown>
        </Col>
      </Row>
    </Container>
  );
}

export default MarkDown;
