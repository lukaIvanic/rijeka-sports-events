import React from 'react';
import { Container, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const logoUrl = "./logo.jpg"

const AccountInfo = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Container className="d-flex">
        <Col xs={12} md={4} className="mx-auto">
          <img src={logoUrl} alt="logo" className="img-fluid mb-3" />
          <h5 className="text-muted">User name:</h5>
          <p className="mb-3">John Doe</p>
          <h5 className="text-muted">Profile sport:</h5>
          <p className="mb-3">Bbasketball</p>
          <h5 className="text-muted">Profile league:</h5>
          <p className="mb-3">NBA</p>
          <Link to="/formular">
            <Button variant="secondary">Edit profile</Button>
          </Link>
        </Col>
      </Container>
    </div>




  );
}

export default AccountInfo;
