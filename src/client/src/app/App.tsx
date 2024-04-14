import { ApolloProvider } from '@apollo/client';
import { client } from './app-apollo.tsx';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './app-theme.ts';
import CssBaseline from '@mui/material/CssBaseline';
import { LaunchesPage } from '../pages';

export const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LaunchesPage />
    </ThemeProvider>
  </ApolloProvider>
);
