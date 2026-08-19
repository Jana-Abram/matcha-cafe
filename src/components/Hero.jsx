import './Hero.css';

import logo from '../assets/logo.png';
import matcha from '../assets/matcha.png';
import flower from '../assets/flower.png';

function Hero() {
  return (
    <section className="hero">

      <nav className="navbar">

        <img
          className="logo"
          src={logo}
          alt="Bloom Bites Cafe"
        />

        <div className="search">
          Search your cup of coffee here...
        </div>

        <div className="nav-links">
          <a href="#shop">Shop</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#community">Join Our Community</a>
        </div>

      </nav>

      <img
        className="hero-flower hero-flower--title"
        src={flower}
        alt=""
      />

      <img
        className="hero-flower hero-flower--bloom"
        src={flower}
        alt=""
      />

      <img
        className="hero-flower hero-flower--matcha-bottom-left"
        src={flower}
        alt=""
      />

      <div className="hero-content">

        <div className="hero-text">

          <h1>
            A Quiet Bloom
            <br />
            in Every Sip
          </h1>

          <p>
            We whisk fine matcha with floral touches to
            create cups that feel like a gentle pause in your
            day—warm, delicate, and quietly uplifting, from
            first sip to last.
          </p>

          <div className="hero-buttons">

            <button className="order-btn">
              Order Online
            </button>

            <button className="visit-btn">
              Visit Bloom Bites
              <span>›</span>
            </button>

          </div>

        </div>

        <div className="hero-image">
  <img src={matcha} alt="Matcha latte" />

  <img
    className="flower flower-top"
    src={flower}
    alt=""
  />

  <img
    className="flower flower-mid"
    src={flower}
    alt=""
  />

  <img
    className="flower flower-bottom"
    src={flower}
    alt=""
  />
</div>

      </div>

    </section>
  );
}

export default Hero;