import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Card as MUICard,
  Grow,
  Badge,
  Box,
  Grid
} from '@mui/material';
import { ILaunch } from '../../shared/types.ts';

export const Card = (props: ILaunch) => {
  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
      <MUICard
        sx={{
          width: {
            xs: '100%',
            md: 320
          }
        }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{
              objectFit: 'contain'
            }}
            loading="lazy"
            height="288"
            image={
              props?.links?.patch?.large ||
              'https://www.elonx.net/wp-content/uploads/Iridium-7_Iridium.png'
            }
            alt={props?.name}
          />
          <CardContent>
            <Grid container justifyContent="space-between">
              <Grid item xs={10}>
                <Typography noWrap gutterBottom variant="h5" component="div">
                  {props?.name}
                </Typography>
              </Grid>
              <Badge
                component={Box}
                ml={2}
                color={props.success ? 'success' : 'error'}
                variant="dot"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
              />
            </Grid>

            <Typography noWrap variant="h6" component="div" color="text.secondary">
              {props?.date_utc && new Date(props?.date_utc).toLocaleDateString()}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                height: 60,
                WebkitLineClamp: '3',
                WebkitBoxOrient: 'vertical'
              }}>
              {props?.details || 'No Date'}
            </Typography>
          </CardContent>
        </CardActionArea>
      </MUICard>
    </Grow>
  );
};
