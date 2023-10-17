import Header from './Header';
import { styled } from '@mui/material';
import { ReactNode } from 'react';

const WithHeader = (element: ReactNode) => {
  return (
    <PageContainer>
      <Header />
      {element}
    </PageContainer>
  );
};

const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export default WithHeader;
