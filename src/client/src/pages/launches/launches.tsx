import { Box, Container, Grid, Typography } from '@mui/material';

import { LaunchList } from '../../widget';
import { AppHeader } from '../../shared/ui';

export const LaunchesPage = () => (
  <Box width="100%" height="100vh">
    <Box height="60%">
      <Box
        sx={{
          position: 'absolute',
          backgroundImage:
            "url('https://sxcontent9668.azureedge.us/cms-assets/assets/Star6_49_041224_DSC_7479_desktop_db920dec9f.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundColor: '#000',
          backgroundSize: 'cover',
          height: '60%',
          width: '100%'
        }}
      />
      <AppHeader />
      <Container>
        <Grid container>
          <Grid item xs={12} md={5} position="relative" mt={6}>
            <Typography color="white" variant="h3" mb={3} sx={{ typography: { xs: 'h4' } }}>
              Discover all SpaceX Launches
            </Typography>
            <Typography color="white" variant="h6">
              Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the
              reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon
              9 is the world’s first orbital class reusable rocket.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Container>
      <Box mt={4}>
        <Typography variant="h3" align="center">
          Launches
        </Typography>
      </Box>
      <LaunchList />
    </Container>
  </Box>
);
