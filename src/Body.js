import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button,Jumbotron } from 'reactstrap';

  const Body = (props) => {
    return (       
      <Container>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
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