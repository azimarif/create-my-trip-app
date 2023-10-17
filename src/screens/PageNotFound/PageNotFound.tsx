import { Button, Container, Paper, Typography } from '@mui/material';
import Body from '../../layout/Body';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { Strings } from '../../locales/English';
import logo from '../../assets/compass.svg';
import backgroundImage from '../../assets/background.png';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Body>
      <Paper elevation={3} sx={{ m: 'auto' }} style={styles.paperContainer}>
        <img src={logo} alt="404" />
        <Container sx={{ display: 'flex', alignItems: 'center' }}>
          <Container sx={{ py: 2 }}>
            <Typography variant={'h3'} mb={2} sx={{ textAlign: 'center' }}>
              {Strings.PageNotFoundPage.Dialog.Title}
            </Typography>
            <Typography variant={'h6'} mb={2} color={grey['700']}>
              {Strings.PageNotFoundPage.Dialog.Description1}
            </Typography>
            <Typography color={grey['700']}>
              {Strings.PageNotFoundPage.Dialog.Description2}
            </Typography>
            <Typography mb={2} color={grey['700']}>
              {Strings.PageNotFoundPage.Dialog.Description3}
            </Typography>
            <Button variant={'contained'} onClick={() => navigate('/')}>
              {Strings.PageNotFoundPage.Dialog.ActionName}
            </Button>
          </Container>
        </Container>
      </Paper>
    </Body>
  );
}

const styles = {
  paperContainer: {
    backgroundImage: `url(${backgroundImage})`,
  },
};

export default PageNotFound;
