import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col, Container } from 'reactstrap';

const ProfileForm = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Container className="d-flex"> 
        <Form style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "75vh" }}>
          <Container style={{ width: "40%", display: "flex", justifyContent: "center", alignItems: "center",marginBottom: "20px" }}>
            <Row>
              <Col >
                {previewUrl && <img src={previewUrl} style={{ width: "100%" }} />}
              </Col>
            </Row>
          </Container>
          <FormGroup>
            <Label for="profilePhoto">Profile Photo</Label>
            <Input type="file" name="profilePhoto" id="profilePhoto" onChange={handleFileChange} />
          </FormGroup>
          <FormGroup>
            <Label for="clubName">Club Name</Label>
            <Input type="text" name="clubName" id="clubName" />
          </FormGroup>
          <FormGroup>
            <div className="form-group">
              <label htmlFor="league">Select league</label>
              <select id="league" className="form-control">
                  <option value="default" selected disabled hidden>Choose league</option>
                  <option value="HNL">HNL</option>
              </select>
            </div>
          </FormGroup>
          <Button>Save Changes</Button>
        </Form>
        </Container> 
    </div>
  );
};

export default ProfileForm;
