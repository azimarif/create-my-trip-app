import React, { useState } from 'react';
import Body from '../../layout/Body';
import Dropdown from '../../components/Dropdown/Dropdown';
import MultiSelect from '../../components/MultiSelect/MultiSelect';
import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import {
  budgetOptions,
  destinationOptions,
  interestOptions,
  stagesOptions,
  travelSizeOptions,
  whenOptions,
} from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [travellersCount, setTravellersCount] = useState(0);
  const [budget, setBudget] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [tripDuration, setTripDuration] = useState('');
  const [tripDate, setTripDate] = useState('');
  const [tripStage, setTripStage] = useState('');

  const handleMultiSelectChange =
    (setter: React.Dispatch<React.SetStateAction<string[]>>) =>
    (e: React.ChangeEvent<{ value: unknown }>) => {
      const selectedValues = e.target.value as string[];
      setter(selectedValues);
    };

  const handleClick = () => {
    const invalidInputs = [fullName, mobileNumber, email].some(
      (x) => x.length === 0,
    );
    if (invalidInputs) {
      alert('Please enter mandatory fields!');
      return;
    }
    const tripInfo = {
      places: selectedPlaces,
      interests: selectedInterests,
      travellersCount,
      budget,
      fullName,
      email,
      mobileNumber,
      tripDuration,
      tripDate,
      tripStage,
    };

    const json = localStorage.getItem('trips') || '[]';
    const trips = JSON.parse(json);
    trips.push(tripInfo);
    localStorage.setItem('trips', JSON.stringify(trips));
    setShowPopup(false);
    navigate('/success');
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  return (
    <Body>
      <div className="container">
        <MultiSelect
          items={destinationOptions}
          placeHolder="Where do you want to go?"
          selectedItems={selectedPlaces}
          onChangeHandler={handleMultiSelectChange(setSelectedPlaces)}
        />
        <MultiSelect
          items={interestOptions}
          placeHolder="Your Interests?"
          selectedItems={selectedInterests}
          onChangeHandler={handleMultiSelectChange(setSelectedInterests)}
        />
        <Dropdown
          items={travelSizeOptions}
          defaultValue="No. of travelers"
          onChangeHandler={(e: any) => setTravellersCount(e.target.value)}
        />
        <Dropdown
          items={budgetOptions}
          defaultValue="Budget Per Person"
          onChangeHandler={(e: any) => setBudget(e.target.value)}
        />
      </div>
      <div style={{ margin: '10px' }}>
        <Button variant="contained" onClick={openPopup}>
          Create My Trip Now
        </Button>
      </div>

      <Modal
        open={showPopup}
        onClose={() => setShowPopup(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CenteredContainer className="row">
            <Typography variant="h6" component="h2">
              Almost There!
            </Typography>
          </CenteredContainer>
          <CenteredContainer>
            <Typography sx={{ mt: 2 }}>
              We need a bit more info to create your itinerary:
            </Typography>
          </CenteredContainer>
          <CenteredContainer>
            <MarginedContainer>
              <TextField
                required
                id="outlined-required"
                label="Full Name"
                fullWidth
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </MarginedContainer>
          </CenteredContainer>
          <CenteredContainer>
            <MarginedContainer>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </MarginedContainer>
          </CenteredContainer>
          <CenteredContainer>
            <MarginedContainer>
              <TextField
                fullWidth
                id="outlined-required"
                required
                label="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </MarginedContainer>
          </CenteredContainer>
          <CenteredContainer>
            <Container
              style={{
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <TextField
                placeholder="Trip Duration (Days)"
                value={tripDuration}
                onChange={(e) => setTripDuration(e.target.value)}
              />
              <Dropdown
                items={whenOptions}
                defaultValue="When"
                onChangeHandler={(e: any) => setTripDate(e.target.value)}
              />
            </Container>
          </CenteredContainer>
          <CenteredContainer>
            <MarginedContainer>
              <Dropdown
                items={stagesOptions}
                defaultValue="What stage of planning are you in?"
                onChangeHandler={(e: any) => setTripStage(e.target.value)}
              />
            </MarginedContainer>
          </CenteredContainer>
          <CenteredContainer>
            <MarginedContainer>
              <Button variant="contained" onClick={handleClick}>
                Submit
              </Button>
            </MarginedContainer>
          </CenteredContainer>
        </Box>
      </Modal>
    </Body>
  );
};

const MarginedContainer = styled(Container)`
  margin-top: 10px;
`;

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

export default Home;
