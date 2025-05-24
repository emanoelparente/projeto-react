import './App.css';
import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';

import { ThemeProvider } from '@mui/material/styles';

import { AuthProvider } from './context/AuthContext';
import { ModalProvider } from './context/ModalContext';

import AppContent from './AppContent';
import theme from './theme';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <AppContent />
        </ModalProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
