import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function PhoneCaseCard() {
    let samplePhone = {
        title: 'Cooler Cases, Inc.',
        img: 'phoneCase.webp',
        desc: 'This is a sample phone case available for purchase!'
    }

    return (
    <Card>
        <Card.Img variant="top" src={samplePhone.img} fluid rounded />
        <Card.Body>
            <Card.Title>{samplePhone.title}</Card.Title>
            <Card.Text>
            {samplePhone.desc}
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
        </Card.Body>
    </Card>
  )
}
export default PhoneCaseCard