import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import Body from '../../layout/Body';
import { Trip } from '../../Trip';
import { adminConfig } from '../../utils/constants';

const CardContainer = styled(Container)({
  maxWidth: '100em',
  margin: '20px',
});

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: '2em',
});

const CardTitleContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const JourneyContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const JourneyDivider = styled(Divider)({
  flex: 1,
  margin: 15,
});

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [trips, setTrips] = useState<Trip[]>([]);
  const [showTrips, setShowTrips] = useState(false);

  const loadTrips = () => {
    const json = localStorage.getItem('trips') || '[]';
    setTrips(JSON.parse(json));
  };

  const loginHandler = () => {
    if (
      username === adminConfig.username &&
      password === adminConfig.password
    ) {
      setShowTrips(true);
      loadTrips();
      return;
    }
    alert('Invalid username & password');
  };

  useEffect(() => {
    if (showTrips) {
      loadTrips();
    }
  }, [showTrips]);

  return (
    <Body>
      {!showTrips ? (
        <>
          <div style={{ margin: '10px' }}>
            <TextField
              placeholder="Username"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ margin: '10px' }}>
            <TextField
              type="password"
              fullWidth
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ margin: '10px' }}>
            <Button variant="contained" onClick={loginHandler}>
              Login
            </Button>
          </div>
        </>
      ) : (
        <>
          <Typography variant="h5" mb={2}>
            Booked Trips
          </Typography>
          {trips.map((trip, index) => (
            <CardContainer key={index}>
              <Card>
                <StyledCardContent>
                  <CardTitleContainer>
                    <Typography variant="h6">Name: {trip.fullName}</Typography>
                    <Typography>Email: {trip.email}</Typography>
                    <Typography>
                      Mobile: {trip.mobileNumber.toString()}
                    </Typography>
                  </CardTitleContainer>
                  <JourneyContainer>
                    <Typography variant="h5">
                      Destinations: {trip.places.join(', ')}
                    </Typography>
                    <JourneyDivider> {trip.tripDate}</JourneyDivider>
                    <Typography variant="h5">
                      Interests: {trip.interests}
                    </Typography>
                  </JourneyContainer>
                  <JourneyContainer>
                    <Typography>
                      Duration: {trip.tripDuration.toString()} days
                    </Typography>
                    <Typography>Stage: {trip.tripStage}</Typography>
                  </JourneyContainer>
                  <JourneyContainer>
                    <Typography>
                      No. of travellers: {trip.travellersCount.toString()}
                    </Typography>
                    <Typography>Budget: {trip.budget}</Typography>
                  </JourneyContainer>
                </StyledCardContent>
              </Card>
            </CardContainer>
          ))}
        </>
      )}
    </Body>
  );
}

export default Login;
