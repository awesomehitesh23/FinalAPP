import React from 'react';
import Navbars from '../../layouts/Navbars';
import homeimage from './../../assets/home.jpg'
import FooterPage from '../footer/FooterPage';
import bg1 from './../../assets/bg1.jpg'
import bg3 from './../../assets/bg3.jpg'
import blackImage from './../../assets/black.jpg';


const HomePage = () => {

  return (
    <React.Fragment>
      <div>
        <Navbars />
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
           
              <img src={homeimage} class="d-block w-100" alt="..." style={{backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',with: '100vw',height: '91vh'}}/>
                <div class="carousel-caption d-none d-md-block">
                <h1 class="display-4 fw-bold">Welcome to Evenster!</h1>
    <hr/>
      <p>WORLD CLASS EVENTS</p>
                </div>
            </div>
            <div class="carousel-item">
              <img src={bg1} class="d-block w-100" alt="..." style={{backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',with: '100vw',height: '91vh'}}/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Vogue Event</h5>
                  <p>Vogue Event location in Brazil.</p>
                </div>
            </div>
            <div class="carousel-item">
              <img src={bg3} class="d-block w-100" alt="..." style={{backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',with: '100vw',height: '91vh'}}/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Organization meet</h5>
                  <p>Organization meet location in India.</p>
                </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>

          <div style={{ background: `url(${blackImage})`, backgroundSize: 'cover', width: '100vw', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ color: 'white', textAlign: 'center', maxWidth: '600px', margin: 'auto',  }}>
  <h2 style={{ color: 'white' }}>ABOUT US</h2>
  <p>Welcome to EVENSTER, where we redefine the way you experience events! Our cutting-edge event app brings you a seamless and immersive platform that transforms the ordinary into extraordinary.</p>
  <p>Explore a world of entertainment with live concerts that resonate with the beats of your favorite artists. Immerse yourself in insightful meetings and conferences that broaden your horizons and foster meaningful connections. Catch the adrenaline of thrilling matches as our app keeps you at the heart of the action, ensuring you never miss a moment.</p>
  <p>But that's not all – delve into the glamorous world of fashion and style.</p>
</div>


          
          
        </div>

          <div class="card-group">
  <div class="card">
    <img src="https://as2.ftcdn.net/v2/jpg/00/52/49/99/1000_F_52499954_7GYIvjNH8kxJguysNrJHMQxHhuMMkDZi.jpg" class="card-img-top" alt="Hollywood Sign on The Hill"/>
    <div class="card-body">
      <h5 class="card-title">Mumbai Groove Collective</h5>
      <p class="card-text">
      Experience the rhythm of Mumbai's vibrant nightlife at our concert party. With electrifying performances, pulsating beats, and a lively atmosphere, it's the ultimate celebration where music takes center stage, creating unforgettable memories under the city lights.
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last pdated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="https://as2.ftcdn.net/v2/jpg/00/12/88/87/1000_F_12888754_hasbEVCm6RYvdElJv6yC6fzNcK4r6USe.jpg" class="card-img-top" alt="Palm Springs Road"/>
    <div class="card-body">
      <h5 class="card-title">Cognizant</h5>
      <p class="card-text">Cognizant's conference meetings serve as dynamic hubs for knowledge exchange and innovation. Bringing together thought leaders, experts, and visionaries, these gatherings pave the way for collaborative insights and technological advancements, shaping the future of the digital landscape.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="https://as1.ftcdn.net/v2/jpg/06/27/23/34/1000_F_627233422_HLY5N35wstbEfy1yiMNfgR258C4pkgT7.jpg" class="card-img-top" alt="Los Angeles Skyscrapers"/>
    <div class="card-body">
      <h5 class="card-title">Lakme Fashion Week</h5>
      <p class="card-text">
      Lakme Fashion Week, a prestigious event in the heart of India's fashion scene, unveils a tapestry of style and elegance. Showcasing the latest trends and fostering the spirit of creativity, it stands as a beacon for the nation's fashion enthusiasts and industry insiders alike
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
        </div>
       <FooterPage/>
      </div>
      </React.Fragment>
    
  )
}

export default HomePage;