import React from 'react';

function Tours() {
  return (
    <section id="tours" className="tours">
      <h2>Our Popular Tours</h2>
      <div className="tour">
        <img src="tour1.jpg" alt="Tour 1" />
        <h3>Adventure in the Mountains</h3>
        <p>Embark on an exciting adventure through breathtaking mountain landscapes.</p>
        <button>Learn More</button>
        <video src="./back.mp4"b controls></video>
      </div>
      <div className="tour">
        <img src="tour2.jpg" alt="Tour 2" />
        <h3>Beach Getaway</h3>
        <p>Relax on sandy beaches and enjoy the calm turquoise waters.</p>
        <button>Learn More</button>
      </div>
      <div className="tour">
        <img src="tour3.jpg" alt="Tour 3" />
        <h3>Cultural Exploration</h3>
        <p>Discover the rich history and culture of ancient cities.</p>
        <button>Learn More</button>
      </div>
    </section>
  );
}

export default Tours;