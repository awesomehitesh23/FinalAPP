
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const FooterPage = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="text-center">
          <Col xs={12} md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>Email: info@evenster.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <h5>Follow Us</h5>
            <p>
              <a href="/home" className="text-light me-2">
                <FontAwesomeIcon icon={faFacebook} className="text-light me-2" size={25}/>
            
             
              </a>
              <a href="/home" className="text-light me-2">
              <FontAwesomeIcon icon={faTwitter} className="text-light me-2" size={25}/>
              </a>
              <a href="/home" className="text-light">
              <FontAwesomeIcon icon={faInstagram} className="text-light"size={25} />
              </a>
            </p>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter for updates on upcoming events.</p>
            {/* Add your newsletter form here */}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterPage;