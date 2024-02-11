import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

const StyledCard = styled(Card)({
  backgroundColor: '#a5b8d5',
  color: 'black',
  border: '2px solid #d3d3d3',
  borderRadius: 12,
  overflow: 'hidden',
  marginBottom: '1em',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
});

const EventDetails = React.memo(({ event, onWishlistButtonClick }) => {
  return (
    <StyledCard>
      <CardContent className="text-center">
        <Typography variant="h5">
          {event.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {event.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          DateTime UTC: {event.datetime_utc}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Venue:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Name: {event.venue.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Capacity: {event.venue.capacity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Country: {event.venue.country}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Performers:
        </Typography>
        {event.performers.map((performer, index) => (
          <Typography key={index} variant="body2" color="text.secondary">
            {performer.name} - Score: {performer.score}
          </Typography>
        ))}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton color="primary" onClick={() => onWishlistButtonClick(event.id)}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
});

export default EventDetails;
