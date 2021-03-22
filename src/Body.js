import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
  const Body = (props) => {
    return (
      <Container>
      <br></br>
      <Row>
         <Col>
         <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
               <CardTitle tag="h5">Card title</CardTitle>
               <CardSubtitle t
                  ag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
               <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
               <Button color="info">Comprar</Button>
            </CardBody>
         </Card>
         </Col>
         <Col>
         <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
               <CardTitle tag="h5">Card title</CardTitle>
               <CardSubtitle t
                  ag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
               <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
               <Button color="info">Comprar</Button>
            </CardBody>
         </Card>
         </Col>
         <Col>
         <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
               <CardTitle tag="h5">Card title</CardTitle>
               <CardSubtitle t
                  ag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
               <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
               <Button color="info">Comprar</Button>
            </CardBody>
         </Card>
         </Col>
         <Col>
         <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
               <CardTitle tag="h5">Card title</CardTitle>
               <CardSubtitle t
                  ag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
               <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
               <Button color="info">Comprar</Button>
            </CardBody>
         </Card>
         </Col>
      </Row>
   </Container>
    );
  };

export default Body;