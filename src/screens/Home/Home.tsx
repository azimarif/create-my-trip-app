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
import { Strings } from '../../locales/English';
import { EMAIL_REGEX, MOBILE_REGEX } from '../../utils/util';

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

  const validate = () => {
    const invalidInputs = [fullName, mobileNumber, email].some(
      (x) => x.length === 0,
    );
    if (invalidInputs) {
      return false;
    }
    const isValidMobile = MOBILE_REGEX.test(mobileNumber);
    const isValidEmail = EMAIL_REGEX.test(email);
    if (!isValidMobile || !isValidEmail) {
      return false;
    }
    return true;
  };
  const handleClick = () => {
    const valid = validate();
    if (!valid) {
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
          placeHolder={Strings.Home.PlaceHolders.Detination}
          selectedItems={selectedPlaces}
          onChangeHandler={handleMultiSelectChange(setSelectedPlaces)}
        />
        <MultiSelect
          items={interestOptions}
          placeHolder={Strings.Home.PlaceHolders.Interests}
          selectedItems={selectedInterests}
          onChangeHandler={handleMultiSelectChange(setSelectedInterests)}
        />
        <Dropdown
          items={travelSizeOptions}
          placeHolder={Strings.Home.PlaceHolders.Travelers}
          onChangeHandler={(e: any) => setTravellersCount(e.target.value)}
        />
        <Dropdown
          items={budgetOptions}
          placeHolder={Strings.Home.PlaceHolders.Budget}
          onChangeHandler={(e: any) => setBudget(e.target.value)}
        />
      </div>
      <div style={{ margin: '10px' }}>
        <Button variant="contained" onClick={openPopup}>
          {Strings.Home.CreateMyTripButton}
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
              {Strings.Home.Modal.Title}
            </Typography>
          </CenteredContainer>
          <CenteredContainer>
            <Typography sx={{ mt: 2 }}>
              {Strings.Home.Modal.Description1}
            </Typography>
          </CenteredContainer>
          <CenteredContainer>
            <MarginedContainer>
              <TextField
                required
                id="outlined-required"
                label={Strings.Home.Modal.Name}
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
                label={Strings.Home.Modal.Email}
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
                label={Strings.Home.Modal.Mobile}
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
                placeholder={Strings.Home.Modal.Trip}
                value={tripDuration}
                onChange={(e) => setTripDuration(e.target.value)}
              />
              <Dropdown
                items={whenOptions}
                placeHolder={Strings.Home.Modal.When}
                onChangeHandler={(e: any) => setTripDate(e.target.value)}
              />
            </Container>
          </CenteredContainer>
          <CenteredContainer>
            <MarginedContainer>
              <Dropdown
                items={stagesOptions}
                placeHolder={Strings.Home.Modal.Stage}
                onChangeHandler={(e: any) => setTripStage(e.target.value)}
              />
            </MarginedContainer>
          </CenteredContainer>
          <CenteredContainer>
            <MarginedContainer>
              <Button variant="contained" onClick={handleClick}>
                {Strings.Home.Modal.SubmitButton}
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
