import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

function Navbar ({handlePageChange}) {
	return (
		<Navbar bg="primary" variant="dark">
    		<Container>
   			<Navbar.Brand href="#home">Khanh Truong</Navbar.Brand>
    		<Nav className="me-auto">
      		<Nav.Link href="#home" onClick={() => handlePageChange('Home')}>Home</Nav.Link>
      		<Nav.Link href="#features" onClick={() => handlePageChange('Aboutme')}>AboutMe</Nav.Link>
      		<Nav.Link href="#pricing" onClick={() => handlePageChange('contactme')}>Contact Me</Nav.Link>
      		<Nav.Link href="#pricing" onClick={() => handlePageChange('Project')}>Project</Nav.Link>
      		<Nav.Link href="#pricing" onClick={() => handlePageChange('contactme')}>Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
	)
}
export default Navbar;