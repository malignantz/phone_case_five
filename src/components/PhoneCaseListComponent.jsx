import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PhoneCaseCardComponent from "./PhoneCaseCardComponent.jsx";

function PhoneCaseListComponent({ getIndex, handleAdd, data }) {
  let makeCol = (data) => (
    <Col key={getIndex()} lg={true}>
      <PhoneCaseCardComponent
        key={getIndex()}
        data={data}
        handleAdd={handleAdd}
      />
    </Col>
  );

  return (
    <>
      <Container fluid="md">
        <Row xs={1} md={2} lg={3} className="g-3">
          {Array.from({ length: 8 }).map((i) => makeCol(data))}
        </Row>
      </Container>
    </>
  );
}
export default PhoneCaseListComponent;
