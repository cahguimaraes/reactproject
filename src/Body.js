import {React, Component} from 'react';
import {Container, Button, Jumbotron } from 'reactstrap';
import api_product from './api_product';

class Body extends Component {
    state = {product: [],}
      
    async componentDidMount() {
        const response = await api_product.get('');
      
        this.setState({ product: response.data });
      }  

      render() {   
        const { product } = this.state; 
       
        
    return (
      <Container>
         <Jumbotron>
         
         <h1 className="display-3">Bem-Vindo</h1>
         <p className="lead">Esse é um pequeno esboço de um projeto de API em Node e o Front em React</p>
         <hr className="my-2" />
         <p> Considerar que todo o projeto foi feito em menos de uma semana por uma aluna que recém terminou o curso de Node e sequer iniciou o de React </p>
         <p className="lead">
          <Button color="primary">+ Justificativas</Button>
        </p>
         </Jumbotron>
      
      <div className="row">   
      {product.map(product => (       
         <div className="col-sm" key={product._id}>          
            <div className="card">
               <img key={product._id} src={product.image} alt={product.name} />
               <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text"><strong>R$</strong> {product.price}</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
               </div>
            </div>
         </div> 
     ))}
     </div>
   </Container>
    );
  };
};
export default Body;