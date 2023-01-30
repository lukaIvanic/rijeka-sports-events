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
    <div className="d-flex justify-content-center align-items-center" style={{ height: '75vh'}}>
        <Form onSubmit={handleSubmit} >
            <div className="form-group">
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
            </div>
            <div className="form-group">
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
            </div>
              <div className="form-group">
                <select id="sport" className="form-control">
                    <option value="default" selected disabled hidden>Choose sport</option>
                    <option value="football">Football</option>
                    <option value="handball">Handball</option>
                    <option value="basketball">Basketball</option>
                    <option value="waterpolo">Waterpolo</option>
                    <option value="volleyball">Volleyball</option>
                </select>
              </div>
              <div className="form-group">
                <select id="league" className="form-control">
                    <option value="default" selected disabled hidden>Choose league</option>
                    <option value="HNL">HNL</option>
                </select>
              </div>
              <div className="form-group">
                <select id="team1" className="form-control">
                    <option value="default" selected disabled hidden>Choose first team</option>
                    <option value="football">Football</option>
                    <option value="handball">Handball</option>
                    <option value="basketball">Basketball</option>
                    <option value="waterpolo">Waterpolo</option>
                    <option value="volleyball">Volleyball</option>
                </select>
              </div>
              <div className="form-group">
                <select id="team2" className="form-control">
                    <option value="default" selected disabled hidden>Choose second team</option>
                    <option value="football">Football</option>
                    <option value="handball">Handball</option>
                    <option value="basketball">Basketball</option>
                    <option value="waterpolo">Waterpolo</option>
                    <option value="volleyball">Volleyball</option>
                </select>
              </div>
            <Button type="submit" className="btn btn-secondary w-100 ">
              Submit
            </Button>
        </Form>
    </div>
  );
  
};

export default GameForm;