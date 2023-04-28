import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function BookTile(props) {
  return (
    <Card className="booktile">
      <Card.Img
        variant="top"
        src={props.data.picture}
      />
      <Card.Body>
        <Card.Title> {props.data.title}</Card.Title>
        {/* <Card.Text>{props.data.description}</Card.Text> */}
        <Button variant="primary" onClick={props.onViewClick}>
          Görkez
        </Button>{" "}
        <Button variant="primary" onClick={props.onDownloadClick}>
          Göçürip al
        </Button>
      </Card.Body>
    </Card>
  );
}
