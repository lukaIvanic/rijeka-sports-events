import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


interface Props {}

interface FormData {
  date: string;
  time: string;
  team1: string;
  team2: string;
}

const GameForm: React.FC<Props> = () => {
  const [formData, setFormData] = useState<FormData>({
    date: '',
    time: '',
    team1: '',
    team2: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    // add your submit logic here
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
      <div className="game-form w-70 mx-auto">
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-3">
            <Label for="date" className="sr-only">
              Date
            </Label>
            <Input
              type="date"
              name="date"
              id="date"
              onChange={handleChange}
              value={formData.date}
              className="form-control"
              placeholder="Date"
              required
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Label for="time" className="sr-only">
              Time
            </Label>
            <Input
              type="time"
              name="time"
              id="time"
              onChange={handleChange}
              value={formData.time}
              className="form-control"
              placeholder="Time"
              required
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Label for="team1" className="sr-only">
              Team 1
            </Label>
            <Input
              type="text"
              name="team1"
              id="team1"
              onChange={handleChange}
              value={formData.team1}
              className="form-control"
              placeholder="Team 1"
              required
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Label for="team2" className="sr-only">
              Team 2
            </Label>
            <Input
              type="text"
              name="team2"
              id="team2"
              onChange={handleChange}
              value={formData.team2}
              className="form-control"
              placeholder="Team 2"
              required
            />
          </FormGroup>
          <Button type="submit" className="btn btn-primary w-100">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
  
};

export default GameForm;