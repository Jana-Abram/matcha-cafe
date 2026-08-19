import './OrderCTA.css';

import ctaBg from '../../assets/matcha-bg.png';
import giftIcon from '../../assets/icon-gift.png';
import deliveryIcon from '../../assets/icon-delivery.png';

function OrderCTA() {
  return (
    <section
      className="order-cta"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >

      <div className="order-cta-content">

        <h2>
          Order with Love,
          <br />
          For your Love!
        </h2>

        <p>
          From crisp croissants dipped in matcha
          to soft, floral macarons, these are the
          bakes our guests can't stop ordering.
          Fresh from the oven, perfectly green,
          and made to pair with your favorite
          latte.
        </p>

        <div className="order-cta-buttons">

          <button className="gift-btn">
            Send a Gift Box
            <img src={giftIcon} alt="" />
          </button>

          <button className="delivery-btn">
            Schedule a Delivery
            <img src={deliveryIcon} alt="" />
          </button>

        </div>

      </div>

    </section>
  );
}

export default OrderCTA;