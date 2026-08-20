import { useState } from 'react';
import './FeaturedBakes.css';

import macaronPink from '../../assets/macaron-pink.png';
import macaronGreen from '../../assets/macaron-green.png';
import croissant from '../../assets/croissant.png';
import matchaJar from '../../assets/matcha-jar.png';
import flower from '../../assets/featured-flower.png';

const items = [
  { img: macaronPink, name: 'Item', price: '4.99' },
  { img: macaronGreen, name: 'Item', price: '4.99' },
  { img: croissant, name: 'Item', price: '4.99' },
  { img: matchaJar, name: 'Item', price: '4.99' },
];

function FeaturedBakes() {
   const [current, setCurrent] = useState(0);

  const goPrev = () =>
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  const goNext = () =>
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  return (
    <section className="featured">
      <div className="featured-grid">
        {items.map((item, i) => (
          <div className="featured-item" key={i}>
            <img src={item.img} alt={item.name} />
            <p className="item-label">{item.name}</p>
            <p className="item-price">$ {item.price}</p>
          </div>
        ))}
      </div>

      <div className="featured-carousel">
        <button
          className="carousel-arrow carousel-arrow--prev"
          onClick={goPrev}
          aria-label="Previous dessert"
        >
          ‹
        </button>

        <div className="featured-item">
          <img src={items[current].img} alt={items[current].name} />
          <p className="item-label">{items[current].name}</p>
          <p className="item-price">$ {items[current].price}</p>
        </div>

        <button
          className="carousel-arrow carousel-arrow--next"
          onClick={goNext}
          aria-label="Next dessert"
        >
          ›
        </button>
      </div>

      <div className="featured-text">

        
      <img
        className="featured-flower"
        src={flower}
        alt=""
      />

        <p className="featured-eyebrow">Featured Matcha Bakes</p>

        <h2>
          Little Bites, Big
          <br />
          Matcha Moments
        </h2>

        <p className="featured-desc">
          From crisp croissants dipped in matcha to soft,
          floral macarons, these are the bakes our guests
          can't stop ordering. Fresh from the oven,
          perfectly green, and made to pair with your
          favorite latte.
        </p>

        <button className="view-all-btn">
          View All Pastries
          <span>›</span>
        </button>

      </div>

    </section>
  );
}

export default FeaturedBakes;