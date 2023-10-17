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
    setShowTrips(true);
    loadTrips();
  };

  useEffect(() => {
    loadTrips();
  }, []);

  return (
    <Body>
      {!showTrips ? (
        <>
          <TextField
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={loginHandler}>Login</Button>
        </>
      ) : (
        <>
          <TextField placeholder="Search by name or emailId" />
          <Typography variant="h5" mb={2}>
            Bookings
          </Typography>
          {trips.map((trip, index) => (
            <CardContainer key={index}>
              <Card>
                <StyledCardContent>
                  <CardTitleContainer>
                    <Typography variant="h6">{trip.fullName}</Typography>
                    <Typography>{trip.email}</Typography>
                    <Typography>{trip.mobileNumber.toString()}</Typography>
                  </CardTitleContainer>
                  <JourneyContainer>
                    <Typography variant="h5">{trip.places}</Typography>
                    <JourneyDivider>{trip.tripDate}</JourneyDivider>
                    <Typography variant="h5">{trip.interests}</Typography>
                  </JourneyContainer>
                  <Container>
                    <Typography>{trip.tripDuration.toString()}</Typography>
                    <Typography>{trip.tripStage}</Typography>
                  </Container>
                  <Container>
                    <Typography>{trip.travellersCount.toString()}</Typography>
                    <Typography>{trip.budget}</Typography>
                  </Container>
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
