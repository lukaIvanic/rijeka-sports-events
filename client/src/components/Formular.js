import React from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

const ProfileForm = () => {
  return (
    <Form style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "75vh" }}>
      <FormGroup>
        <Label for="profilePhoto">Profile Photo</Label>
        <Input type="file" name="profilePhoto" id="profilePhoto" />
      </FormGroup>
      <FormGroup>
        <Label for="clubName">Club Name</Label>
        <Input type="text" name="clubName" id="clubName" />
      </FormGroup>
      <FormGroup>
        <Label for="sport">Sport</Label>
        <Input type="text" name="sport" id="sport" />
      </FormGroup>
      <FormGroup>
        <Label for="league">League</Label>
        <Input type="text" name="league" id="league" />
      </FormGroup>
      <Button>Save Changes</Button>
    </Form>
  );
}

export default ProfileForm;
