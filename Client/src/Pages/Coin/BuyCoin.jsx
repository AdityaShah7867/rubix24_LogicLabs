import React from 'react';

const cardStyle = {
  maxWidth: '18rem',
  margin: '10px',
};

const buttonStyle = {
  marginTop: '10px',
};

const BuyCoin = () => {
  return (
    <div>
    <h2 style={{ textAlign: 'center', marginTop: '100px' }}>Choose a Plan</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={cardStyle}>
        <div className="card">
          <img src="https://i.ebayimg.com/images/g/QuQAAOSwikxgUCQ0/s-l1200.webp" className="card-img-top" alt="Plan Image" style={{ maxHeight: '200px' }} />
          <div className="card-body">
            <h5 className="card-title">Basic Plan</h5>
            <p className="card-text">Get 100 coins for $10.</p>
            <button className="btn btn-primary" style={buttonStyle}>Buy Now</button>
          </div>
        </div>
      </div>
      
      <div style={cardStyle}>
        <div className="card">
          <img src="https://i.ebayimg.com/images/g/QuQAAOSwikxgUCQ0/s-l1200.webp" className="card-img-top" alt="Plan Image" style={{ maxHeight: '200px' }} />
          <div className="card-body">
            <h5 className="card-title">Standard Plan</h5>
            <p className="card-text">Get 250 coins for $20.</p>
            <button className="btn btn-primary" style={buttonStyle}>Buy Now</button>
          </div>
        </div>
      </div>
      <div style={cardStyle}>
        <div className="card">
          <img src="https://i.ebayimg.com/images/g/QuQAAOSwikxgUCQ0/s-l1200.webp" className="card-img-top" alt="Plan Image" style={{ maxHeight: '200px' }} />
          <div className="card-body">
            <h5 className="card-title">Saver Plan</h5>
            <p className="card-text">Get 500 coins for $35.</p>
            <button className="btn btn-primary" style={buttonStyle}>Buy Now</button>
          </div>
        </div>
      </div>
      <div style={cardStyle}>
        <div className="card">
          <img src="https://i.ebayimg.com/images/g/QuQAAOSwikxgUCQ0/s-l1200.webp" className="card-img-top" alt="Plan Image" style={{ maxHeight: '200px' }} />
          <div className="card-body">
            <h5 className="card-title">Ultra Saver Plan</h5>
            <p className="card-text">Get 750 coins for $50.</p>
            <button className="btn btn-primary" style={buttonStyle}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default BuyCoin;
