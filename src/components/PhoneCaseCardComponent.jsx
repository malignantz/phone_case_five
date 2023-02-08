import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function PhoneCaseCardComponent({ data, handleAdd }) {
  return (
    <Card style={{ width: "14rem", marginLeft: "auto", marginRight: "auto" }}>
      <Card.Body className="text-center">
        <Card.Title>{data.phoneName}</Card.Title>
        <Card.Img variant="bottom" src={data.img} />
        <Card.Text>{data.desc}</Card.Text>

        <Button variant="primary" onClick={() => handleAdd(data.phoneName)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}
export default PhoneCaseCardComponent;
