import './App.css';
import { Routes, Route } from 'react-router-dom';

// Fonts for Material UI components
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './style/theme';
// @ts-ignore
import { ThemeProvider } from '@mui/material/styles';
import WithHeader from './layout/WithHeader';
import PageNotFound from './screens/PageNotFound/PageNotFound';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import TripCreatedPage from './screens/TripCreatedPage/TripCreatedPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={WithHeader(<Home />)} />
        <Route path="/login" element={WithHeader(<Login />)} />
        <Route path="/success" element={WithHeader(<TripCreatedPage />)} />
        <Route path="*" element={WithHeader(<PageNotFound />)} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
