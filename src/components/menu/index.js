import React from 'react'
import { Navbar, Nav, Button} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

const Menu = () => {

  return (
      <Navbar bg="primary" variant="dark">
          <Nav className="ml-auto">
            <div>
              <Button variant="light" style={{marginRight: 10}}><NavLink to="/usuarios">Usuários</NavLink></Button>
              <Button variant="light" style={{marginRight: 10}}><NavLink to="/gists">Gists</NavLink></Button>              
            </div>                  
          </Nav>
      </Navbar>
  )
};

export default Menu;