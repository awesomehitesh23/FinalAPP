import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../assets/logo1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbars = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/'); 
  };

  return (
    <>
      <Navbar bg="black" variant="dark" expand="md" style={{ borderBottom: '1px solid #ddd' }}>
        <Navbar.Brand as={Link} to="/home" style={{ marginLeft: '1rem', color: 'white' }}>
          <img src={logo} width={50} style={{ marginRight: 20 }} alt="Logo" /> Crystal Evenster
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ fontSize: 20, textAlign: 'center' }}>
            <Nav.Link
              as={Link}
              to="/home"
              style={{ margin: '0 10px', color: hovered === 'home' ? 'yellow' : 'white' }}
              onMouseEnter={() => setHovered('home')}
              onMouseLeave={() => setHovered(null)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/event"
              style={{ margin: '0 10px', color: hovered === 'event' ? 'yellow' : 'white' }}
              onMouseEnter={() => setHovered('event')}
              onMouseLeave={() => setHovered(null)}
            >
              Event
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/wishlist"
              style={{ margin: '0 10px', color: hovered === 'wishlist' ? 'yellow' : 'white' }}
              onMouseEnter={() => setHovered('wishlist')}
              onMouseLeave={() => setHovered(null)}
            >
              Wishlist
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              style={{ margin: '0 10px', color: hovered === 'about' ? 'yellow' : 'white' }}
              onMouseEnter={() => setHovered('about')}
              onMouseLeave={() => setHovered(null)}
            >
              About
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto" style={{ fontSize: 20, marginRight: '3rem' }} navbar>
            <Nav.Link onClick={handleLogout} style={{ margin: '0 10px', color: 'white' }}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbars;
