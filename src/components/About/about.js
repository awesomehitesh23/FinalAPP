import React from 'react';
import backgroundImage from './../../assets/about.jpg';
import Navbars from '../../layouts/Navbars';
import { Typography, Container, Link, CardContent, Grid } from '@mui/material';
import { Card } from 'react-bootstrap';
import FooterPage from '../../pages/footer/FooterPage';
import aboutus from './../../assets/aboutus.jpg';

const About = () => {
  return (
    <React.Fragment>
    <div>
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '150vh' }}>
        <Navbars />
        <Container style={{ padding: '1rem' }} maxWidth="md" sx={{ mt: 4 }}>
          <Card elevation={3} sx={{ borderRadius: 12, overflow: 'hidden', fontFamily: 'Roboto, sans-serif' }}>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <img src={aboutus} alt="Event App" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Grid>
              <Grid item md={6}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Typography variant="h4" gutterBottom>
                    About Our Event App
                  </Typography>
                  <Typography paragraph>
                    Welcome to our event app! We are passionate about delivering cutting-edge solutions to simplify the event management process for organizers and enhance the experience for attendees.
                  </Typography>

                
                  <ul>
                    {[
                      'Effortless event creation and management',
                      'Seamless registration and ticketing process',
                      'Interactive event maps for easy navigation'
                      
                    ].map((feature, index) => (
                      <li key={index}>
                        <Typography>{feature}</Typography>
                      </li>
                    ))}
                  </ul>

                  <Typography variant="h5" gutterBottom>
                    Our Mission
                  </Typography>
                  <Typography paragraph>
                    Our mission is to revolutionize event organization, providing tools that empower event organizers, foster community engagement, and create memorable experiences that last a lifetime.
                  </Typography>

                  <Typography variant="h5" gutterBottom>
                    Contact Us
                  </Typography>
                  <Typography paragraph>
                    Have any questions or feedback? We would love to hear from you! Please don't hesitate to{' '}
                    <Link href="mailto:info@eventapp.com" color="primary">
                      contact us
                    </Link>
                    .
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </div>
      <FooterPage />
    </div>
    </React.Fragment>
  );
};

export default About;
