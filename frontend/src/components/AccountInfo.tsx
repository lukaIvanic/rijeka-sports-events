import React from 'react';
import { Container, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const logoUrl = "./logo.jpg"

const AccountInfo = () => {
  return (
<div className="d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
  <div className="game-form w-70 mx-auto">
    <Container>
      <Col xs={12} md={4}>
        <img src={logoUrl} alt="logo" className="img-fluid mb-5" />
        <h5 className="text-muted">User name:</h5>
        <p className="mb-5">John Doe</p>
        <h5 className="text-muted">Profile sport:</h5>
        <p className="mb-5">Basketball</p>
        <h5 className="text-muted">Profile league:</h5>
        <p className="mb-5">NBA</p>
        <Link to="/formular">
          <Button variant="secondary">Edit profile</Button>
        </Link>
      </Col>
    </Container>
  </div>
</div>

  );
}

export default AccountInfo;
