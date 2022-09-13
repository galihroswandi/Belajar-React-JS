import Card from 'react-bootstrap/Card';

function Cardkegiatan(props) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.image} style={{maxHeight : "25%"}}/>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cardkegiatan;