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
import { fetchAllTrips } from '../../repository/trip';
import { Strings } from '../../locales/English';

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
    const trips = fetchAllTrips();
    setTrips(trips);
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

  const renderTrip = () => {
    return (
      <>
        <Typography variant="h5" mb={2}>
          Booked Trips
        </Typography>
        {trips.map((trip, index) => (
          <CardContainer key={index}>
            <Card>
              <StyledCardContent>
                <CardTitleContainer>
                  <Typography variant="h6">
                    {Strings.TripDetailPage.Name}
                    {trip.fullName}
                  </Typography>
                  <Typography>
                    {Strings.TripDetailPage.Email}
                    {trip.email}
                  </Typography>
                  <Typography>
                    {Strings.TripDetailPage.Mobile}{' '}
                    {trip.mobileNumber.toString()}
                  </Typography>
                </CardTitleContainer>
                <JourneyContainer>
                  <Typography variant="h5">
                    {Strings.TripDetailPage.Destinations}{' '}
                    {trip.places.join(', ')}
                  </Typography>
                  <JourneyDivider> {trip.tripDate}</JourneyDivider>
                  <Typography variant="h5">
                    {Strings.TripDetailPage.Interests} {trip.interests}
                  </Typography>
                </JourneyContainer>
                <JourneyContainer>
                  <Typography>
                    {Strings.TripDetailPage.Duration}{' '}
                    {trip.tripDuration.toString()} days
                  </Typography>
                  <Typography>
                    {Strings.TripDetailPage.Stage} {trip.tripStage}
                  </Typography>
                </JourneyContainer>
                <JourneyContainer>
                  <Typography>
                    {Strings.TripDetailPage.TravlerCount}{' '}
                    {trip.travellersCount.toString()}
                  </Typography>
                  <Typography>
                    {Strings.TripDetailPage.Budget} {trip.budget}
                  </Typography>
                </JourneyContainer>
              </StyledCardContent>
            </Card>
          </CardContainer>
        ))}
      </>
    );
  };

  return (
    <Body>
      {!showTrips ? (
        <>
          <div style={{ margin: '10px' }}>
            <TextField
              placeholder={Strings.Login.Username}
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ margin: '10px' }}>
            <TextField
              type="password"
              fullWidth
              placeholder={Strings.Login.Password}
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
        renderTrip()
      )}
    </Body>
  );
}

export default Login;
