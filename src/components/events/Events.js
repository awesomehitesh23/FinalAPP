import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Navbars from "../../layouts/Navbars";
import EventDetails from "./EventDetails";
import backgroundImage from './../../assets/banner.jpg';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Events() {
  const [error, setError] = useState("");
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Events';
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8087/events/viewAll');
        const data = await response.json();

        if (data && Array.isArray(data.events)) {
          setEvents(data.events);
        } else {
          setError('Data received is not in the expected format');
        }
      } catch (error) {
        console.error('Error fetching event data:', error);
        setError('Error fetching event data');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <Container>Error: {error}</Container>;
  }

  const handleWishlistButtonClick = async (eventId) => {
    const selectedEvent = events.find((event) => event.id === eventId);
  
    if (!selectedEvent) {
      console.error('Selected event not found');
      return;
    }
  
    const eventData = {
      eventId: selectedEvent.id,
      userId: parseInt(localStorage.getItem('userId')), // Convert userId to integer
      eventType: selectedEvent.type,
      datetime_utc: selectedEvent.datetime_utc,
      venueName: selectedEvent.venue.name,
      venueCapacity: selectedEvent.venue.capacity,
      performerName: selectedEvent.performers.map(performer => performer.name.substring(0, 255)).join(', ')
    };
  
    const token = localStorage.getItem('token');
  
    try {
      const response = await fetch('http://localhost:8088/wishlist/addFavourite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(eventData), // Pass eventData directly, not inside an object
      });
  
      const responseData = await response.json();
  
      console.log(responseData);
  
      if (response.ok) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Great!',
          text: 'You have successfully added the event to wishlist',
          showConfirmButton: true,
          timer: 10000,
        });
  
        navigate('/wishlist');
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Oops! Something went wrong!',
          text: responseData.message || 'Failed to add event to your wishlist!',
          showConfirmButton: true,
          timer: 10000,
        });
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error);
  
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Oops! Something went wrong!',
        text: 'Failed to add event to your wishlist!',
        showConfirmButton: true,
        timer: 10000,
      });
    }
  };
  

  return (
    <React.Fragment>
    <div>
      <Navbars />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
          padding: '20px',
        }}
      >
        <div>
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event.id}>
                <EventDetails event={event} onWishlistButtonClick={handleWishlistButtonClick} />
              </div>
            ))
          ) : (
            <p>No Events</p>
          )}
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Events;
