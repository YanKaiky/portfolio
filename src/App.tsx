import { BrowserRouter } from 'react-router-dom';
import { AppThemeProvider } from './contexts';
import Routes from './routes';

const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppThemeProvider>

  );
}

export default App;
