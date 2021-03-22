import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,  
    NavbarText
  } from 'reactstrap';
  

  const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="danger" dark expand="md">
          <NavbarBrand href="/">Carou</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/cahguimaraes/NodeProject">Github API</NavLink>
              </NavItem>   
              <NavItem>
                <NavLink href="https://github.com/cahguimaraes/reactproject">Github React</NavLink>
              </NavItem>  
              <NavItem>
                <NavLink href="">Carrinho</NavLink>
              </NavItem>        
            </Nav>
            
          </Collapse>
        </Navbar>
      </div>
    );
  }

export default Headers;