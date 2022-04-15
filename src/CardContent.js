import React from 'react';
import {
    Card,
    Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardContent(){



  return (
<Card style={{ width: '18rem' }} className="card card0">
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body className='border'>
    <Card.Title>Odin's Fate</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

  )
  }
  export default CardContent