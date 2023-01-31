import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, FormGroup, Label, Input, Button, Row, Col, Container } from 'reactstrap';
import { getAuthActions } from '../store/actions/authActions';
import { getLeagueActions } from '../store/actions/leagueActions';

type profileFormProps = {
  userDetails?: any;
  getLeague?: any;
  leagues?: any;
  updateProfile?: any;
}

const ProfileForm:FC<profileFormProps> = ({userDetails, leagues, updateProfile}) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [profileName, setProfileName] = useState("")
  const [league, setLeague] = useState("")
  const navigate = useNavigate()

  
  const handleLeagueChange = (e: any) => {
    setLeague(e.target.value)
  }
  
  const handleNameChange = (e: any) => {
    setProfileName(e.target.value)
  }
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  useEffect(()=> {
    if (userDetails && userDetails.league && userDetails.username) {
      if (!leagues.find((l: any) => l._id === userDetails.league)) return
      setLeague(leagues.find((l: any) => l._id === userDetails.league).name)
      setProfileName(userDetails.username)
    }
  }, [userDetails, leagues])

  const handleSubmit = async () => {
    const body = {
      league,
      name: profileName
    }
    const answer = await updateProfile(userDetails._id, body, navigate);
    console.log(answer)
    if (answer.error) {
      toast.error(answer.error.exception?.code === "ECONNABORTED" ? "Something went wrong. Retry Connection" : "Credentials incorrect")
    }
  }
  
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
            <Input type="text" name="clubName" id="clubName" value={profileName} onChange={handleNameChange}/>
          </FormGroup>
          <FormGroup>
          <div className="form-group">
            <label htmlFor="league">Select league</label>
            <select id="league" className="form-control" value={league} onChange={handleLeagueChange}>
              <option value="default" disabled hidden>Choose league</option>
              {leagues.map((l: any) => <option key={l.name} value={l.name}>{l.name}</option>)}
            </select>
          </div>
          </FormGroup>
          <Button onClick={handleSubmit}>Save Changes</Button>
        </Form>
        </Container> 
    </div>
  );
};

//@ts-ignore
const mapStoreStateToProps = ({ auth, league }) => {
  return {
    ...auth,
    ...league
  }
}


const mapActionsToProps = (dispatch: any) => {
  return {
    ...getAuthActions(dispatch),
    ...getLeagueActions(dispatch)
  }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(ProfileForm)

