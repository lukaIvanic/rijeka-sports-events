import React from 'react';
import { Container, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AccountInfo = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: '75vh' }}>
      <Col xs={12} md={4}>
        <Image fluid className="mb-5" />
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
  );
}

export default AccountInfo;
