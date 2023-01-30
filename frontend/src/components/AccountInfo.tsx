import React, { FC, useEffect, useState } from 'react';
import { Container, Col, Image, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuthActions } from '../store/actions/authActions';
import { getLeagueActions } from '../store/actions/leagueActions';
const logoUrl = "./logo.jpg"

type aiProps = {
  userDetails?: any;
  getLeague?: any;
}

const AccountInfo: FC<aiProps> = ({ userDetails, getLeague }) => {
  const [leagueName, setLeagueName] = useState("")
  useEffect(() => {
    const ok = async () => {
      if (userDetails && userDetails.league)
        setLeagueName((await getLeague(userDetails.league)).league.name)
    }
    ok()
  }, [userDetails])
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Container className="d-flex">
        <Col xs={12} md={4} className="mx-auto">
          <img src={logoUrl} alt="logo" className="img-fluid mb-3" />
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
      </Container>
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
