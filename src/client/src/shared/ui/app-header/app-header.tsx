import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export const AppHeader = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="white">
          SpaceX Launches
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);
