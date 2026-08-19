import './Footer.css';

import logo from '../../assets/footer-logo.png';
import phoneIcon from '../../assets/phone.png';
import telegramIcon from '../../assets/telegram.png';
import pinIcon from '../../assets/pin.png';
import instagramIcon from '../../assets/instagram.png';

function Footer() {
  return (
    <footer className="footer">

      <img className="footer-logo" src={logo} alt="Bloom Bites Cafe" />

      <div className="footer-nav">
        <nav className="footer-links">
          <a href="#shop">Shop</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="footer-copy">
          © 2025 Bloom Bites NYC. All rights reserved.
        </p>
      </div>

      <div className="footer-socials">
        <a href="tel:+10000000000"><img src={phoneIcon} alt="Phone" /></a>
        <a href="#telegram"><img src={telegramIcon} alt="Telegram" /></a>
        <a href="#location"><img src={pinIcon} alt="Location" /></a>
        <a href="#instagram"><img src={instagramIcon} alt="Instagram" /></a>
      </div>

    </footer>
  );
}

export default Footer;