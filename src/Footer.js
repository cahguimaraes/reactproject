import React from 'react';
import { Container} from 'reactstrap';

class Footer extends React.Component{
    render(){
        return (
            <Container>
                <br/>
                <p>Para baixar o projeto da API em Node no GitHub  <a href="https://github.com/cahguimaraes/reactproject"> Clique Aqui </a> 
                ou o projeto React <a href="https://github.com/cahguimaraes/reactproject">Clique Aqui</a></p>
                <p>By: Caroline Guimarães :)</p>
            </Container>
        );
    }
}

export default Footer;