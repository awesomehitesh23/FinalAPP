import React from 'react';
import { Card, CardBody, CardText, CardTitle, Button } from 'react-bootstrap';

const FavouriteEvents = ({ wishlist, onDelete }) => {
  console.log(wishlist);

  const handleDeleteClick = () => {
    onDelete(); // Trigger the onDelete function passed as a prop
  };

  return (
    <div>
      <Card className="text-center" style={{
        backgroundColor: '#f5f5f3',
        color: 'black',
        border: '2px solid #d3d3d3',
        borderRadius: '12px',
        marginBottom: '1em',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px',
        width: '500px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}>
        <CardBody className="text-center">
          <CardTitle tag="h5">
            {/* Display event title or any other relevant information */}
          </CardTitle>
          <p> Event ID: {wishlist.eventId}</p>
          <p> User ID: {wishlist.eventId}</p>
          <p> Event Type: {wishlist.eventType}</p>
          <CardText className="text-center">
            <p>DateTime UTC: {wishlist.datetime_utc}</p>
          </CardText>
          <CardText className="text-center">
            <p>Venue:</p>
            Name: {wishlist.venueName}<br />
            Capacity: {wishlist.venueCapacity}<br />
          </CardText>

          <CardText className="text-center">
            <p>Performers:</p>
            Name: {wishlist.performerName}<br />
          </CardText>

          {/* Add a delete button */}
          <Button variant="danger" onClick={handleDeleteClick}>
            Delete Event
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default FavouriteEvents;
