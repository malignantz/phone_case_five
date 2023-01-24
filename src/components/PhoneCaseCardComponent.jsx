import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function PhoneCaseCardComponent({data}) {

    return (
    <Card>
        <Card.Img variant="top" src={data.img} />
        <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>
            {data.desc}
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
        </Card.Body>
    </Card>
  )
}
export default PhoneCaseCardComponent;