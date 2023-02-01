import React, { FC, useEffect, useState } from 'react';
import { Container, Col, Image, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuthActions } from '../store/actions/authActions';
import { getLeagueActions } from '../store/actions/leagueActions';
const defProf = `data:image/jpeg;base64,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`

type aiProps = {
  userDetails?: any;
  getLeague?: any;
}

const AccountInfo: FC<aiProps> = ({ userDetails, getLeague }) => {
  const [leagueName, setLeagueName] = useState("")
  const [profilePicture, setProfilePicture] = useState(defProf)

  useEffect(() => {
    const ok = async () => {
      console.log(userDetails)
      if (userDetails && userDetails.league && userDetails.profilePicture){
        console.log("in")
        setLeagueName((await getLeague(userDetails.league)).league.name)
        setProfilePicture(userDetails.profilePicture === "NPP" ? defProf : userDetails.profilePicture)
      }
    }
    ok()
  }, [userDetails])

  return (
    <div className="d-flex justify-content-center align-items-center position-relative" style={{ height: '75vh' }}>
      <div className="link-top-left">
        <Link to="/" className="position-absolute" style={{ top: 10, left: 10 }}>
          <Button variant="secondary">
            X
          </Button>
        </Link>
      </div>
      <div>
        <Col style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <img src={profilePicture} alt="logo" className="img-thumbnail mb-3"  style={{ width: "50%", maxWidth: "500px" }}/>
          {userDetails && <>
            <h5 className="text-muted">User name:</h5>
            <p className="mb-3">{userDetails.username}</p>
          </>}
          {userDetails && userDetails.type && userDetails.type === "CLUB" && <>
            <h5 className="text-muted">Profile sport:</h5>
            <p className="mb-3">{userDetails.sport}</p>
            <h5 className="text-muted">Profile league:</h5>
            <p className="mb-3">{leagueName}</p>
          </>}
          <Link to="/formular">
            <Button variant="secondary">Edit profile</Button>
          </Link>
        </Col>
      </div>
    </div>

  );
}
//@ts-ignore
const mapStoreStateToProps = ({ auth }) => {
  return {
    ...auth
  }
}


const mapActionsToProps = (dispatch: any) => {
  return {
    ...getAuthActions(dispatch),
    ...getLeagueActions(dispatch)
  }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(AccountInfo)
