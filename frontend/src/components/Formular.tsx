import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, FormGroup, Label, Input, Button, Row, Col, Container } from 'reactstrap';
import { getAuthActions } from '../store/actions/authActions';
import { getLeagueActions } from '../store/actions/leagueActions';

type profileFormProps = {
  userDetails?: any;
  leagues?: any;
  updateProfile?: any;
  updateProfilePicture?: any;
}

const ProfileForm: FC<profileFormProps> = ({ userDetails, leagues, updateProfile, updateProfilePicture }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [profileName, setProfileName] = useState("")
  const [league, setLeague] = useState("")
  const [image, setImage] = useState(null)
  const navigate = useNavigate()


  const handleLeagueChange = (e: any) => {
    setLeague(e.target.value)
  }

  const handleNameChange = (e: any) => {
    setProfileName(e.target.value)
  }

  const handleFileChoosing = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener("load", async () => {
      setPreviewUrl(reader.result as string);

      const uploaded_image = reader.result;
      //@ts-ignore
      const answerPP = await updateProfilePicture(userDetails._id, uploaded_image)
      if (answerPP.error) {
        console.log(answerPP)
        return toast.error("something went wrong")
      }
    });
    reader.readAsDataURL(file);
  }

  // const handleUpload = async () => {
  //   const answer = await updateProfilePicture(userDetails.id, image)
  //       if (!answer.error){
  //           // setTitle('')
  //           // setDescription('')
  //           // getAllPosts()
  //           // toggleAddPostShowing()
  //       }
  // }

  useEffect(() => {
    if (userDetails && userDetails.league && userDetails.username) {
      if (!leagues.find((l: any) => l._id === userDetails.league)) return
      setLeague(leagues.find((l: any) => l._id === userDetails.league).name)
      setProfileName(userDetails.username)
      setPreviewUrl(userDetails.profilePicture === "NPP" ? "" : userDetails.profilePicture)
    }
  }, [userDetails, leagues])

  useEffect(() => {
    if (userDetails.type === "USER") {
      setPreviewUrl(userDetails.profilePicture === "NPP" ? "" : userDetails.profilePicture)
      setProfileName(userDetails.username)
    }
  }, [userDetails])

  const handleSubmit = async () => {
    const body = {
      league,
      name: profileName
    }

    const answer = await updateProfile(userDetails._id, body, navigate);
    console.log("answer", answer)
    if (answer.error) {
      toast.error(answer.error.exception?.code === "ECONNABORTED" ? "Something went wrong. Retry Connection" : "Credentials incorrect")
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center position-relative" style={{ height: '75vh' }}>
      <div>
        <Link to="/" className="position-absolute" style={{ top: 10, left: 10 }}>
          <Button variant="secondary">
            X
          </Button>
        </Link>
      </div>
      <Form style={{ width: "40%" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {previewUrl && (<img src={previewUrl} style={{ width: "30%", height: "30%", minWidth: "100px", objectFit: "scale-down" }} />)}
        </div>
        <FormGroup>
          <Label for="profilePhoto">Profile Photo</Label>
          <input onChange={handleFileChoosing} type="file" name="image" id="imageUpload" accept="image/jpeg, image/png, image/jpg" />
        </FormGroup>
        <FormGroup>
          <Label for="clubName">Profile Name</Label>
          <Input disabled={userDetails && userDetails.type && userDetails.type === "USER"} type="text" name="clubName" id="clubName" value={profileName} onChange={handleNameChange} />
          <p style={{ fontSize: "12px" }}>*users cant change their username</p>
        </FormGroup>
        {userDetails && userDetails.type && userDetails.type === "CLUB" &&
          <>
            <FormGroup>
              <div className="form-group">
                <label htmlFor="league">Select league</label>
                <select id="league" className="form-control" value={league} onChange={handleLeagueChange}>
                  <option value="default" disabled hidden>Choose league</option>
                  {leagues.map((l: any) => <option key={l.name} value={l.name}>{l.name}</option>)}
                </select>
              </div>
            </FormGroup>
            <div className="d-flex justify-content-center">
              <Button onClick={handleSubmit}>Save Changes</Button>
            </div>
          </>
        }
      </Form>
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
    ...getAuthActions(dispatch)
  }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(ProfileForm)

