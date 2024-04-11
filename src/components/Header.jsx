import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>

    <Navbar className="bg-dark">
    <Container>
      <Navbar.Brand >
      <FontAwesomeIcon icon={faCompactDisc} style={{color: "#74C0FC",fontSize:'30px'}} />
        <span className='ms-2' style={{color:'lightblue',fontSize:'30px'}}>Media player</span>
      </Navbar.Brand>
    </Container>
  </Navbar>

  </>
  )
}

export default Header