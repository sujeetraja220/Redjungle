import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import poojs from "./imag/pooja.jpg"

function ImageCards() {
  return (
   <>
    <Card style={{ width: '15rem', display:'inline'}}>
      <Card.Img variant="top" src={poojs} />
      <Card.Body>
        <Card.Title>Sunney Leon</Card.Title>
        <Card.Text>Sunney leon hot photo </Card.Text>
        <Button variant="primary">Downlod</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem', display:'inline'}}>
      <Card.Img variant="top" src={poojs} />
      <Card.Body>
        <Card.Title>Sunney Leon</Card.Title>
        <Card.Text>Sunney leon hot photo </Card.Text>
        <Button variant="primary">Downlod</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem', display:'inline'}}>
      <Card.Img variant="top" src={poojs} />
      <Card.Body>
        <Card.Title>Sunney Leon</Card.Title>
        <Card.Text>Sunney leon hot photo </Card.Text>
        <Button variant="primary">Downlod</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem', display:'inline'}}>
      <Card.Img variant="top" src={poojs} />
      <Card.Body>
        <Card.Title>Sunney Leon</Card.Title>
        <Card.Text>Sunney leon hot photo </Card.Text>
        <Button variant="primary">Downlod</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default ImageCards;