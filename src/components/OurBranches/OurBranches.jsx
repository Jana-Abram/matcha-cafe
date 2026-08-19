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

    </section>
  );
}

export default OurBranches;