import { useState } from 'react';
import './OurBranches.css';

import soho from '../../assets/branch-soho.png';
import bkLounge from '../../assets/branch-bk-lounge.png';
import lab from '../../assets/branch-lab.png';

const branches = [
  { img: soho, name: 'Bloom Bites · SoHo' },
  { img: bkLounge, name: 'Bloom Bites · BK Lounge' },
  { img: lab, name: 'Bloom Bites · Lab' },
];

function OurBranches() {
  const [current, setCurrent] = useState(0);

  const goPrev = () =>
    setCurrent((prev) => (prev === 0 ? branches.length - 1 : prev - 1));

  const goNext = () =>
    setCurrent((prev) => (prev === branches.length - 1 ? 0 : prev + 1));
  return (
    <section className="branches">

      <p className="branches-eyebrow">
        Our Branches
      </p>

      <h2 className="branches-title">
        TOP BloomBites in NYC
      </h2>

      <div className="branches-grid">

        {branches.map((branch, i) => (
          <div
            className={`branch-card ${
              i === 1 ? 'branch-card--featured' : ''
            }`}
            key={branch.name}
          >

            <div className="branch-photo-wrapper">
              <img
                className="branch-photo"
                src={branch.img}
                alt={branch.name}
              />
            </div>

            <div className="branch-footer">

              <span className="branch-name">
                {branch.name}
              </span>

              <button className="find-us-btn">
                Find us
                <span
                  className="pin-icon"
                  aria-hidden="true"
                >
                  📍
                </span>
              </button>

            </div>

          </div>
        ))}

      </div>

       <div className="branches-carousel">
        <button
          className="carousel-arrow carousel-arrow--prev"
          onClick={goPrev}
          aria-label="Previous branch"
        >
          ‹
        </button>

        <div className="branch-card branch-card--featured">
          <div className="branch-photo-wrapper">
            <img
              className="branch-photo"
              src={branches[current].img}
              alt={branches[current].name}
            />
          </div>

          <div className="branch-footer">
            <span className="branch-name">
              {branches[current].name}
            </span>

            <button className="find-us-btn">
              Find us
              <span className="pin-icon" aria-hidden="true">
                📍
              </span>
            </button>
          </div>
        </div>

        <button
          className="carousel-arrow carousel-arrow--next"
          onClick={goNext}
          aria-label="Next branch"
        >
          ›
        </button>
      </div>

    </section>
  );
}

export default OurBranches;