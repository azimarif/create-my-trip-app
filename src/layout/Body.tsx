import { styled } from '@mui/material';
import { ReactNode } from 'react';
import backgroundImage from '../assets/background.png';

interface Props {
  children: ReactNode;
}

function Body({ children }: Props) {
  return <BodyContainer>{children}</BodyContainer>;
}

const BodyContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 20,
  alignItems: 'center',
  maxWidth: '100vw',
  height: '100%',
  flex: 1,
  backgroundImage: `url(${backgroundImage})`,
});

export default Body;
