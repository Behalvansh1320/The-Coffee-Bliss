import "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section >
        <div className="bg-dark-coffee text-white text-center">
          <h1>Welcome to Coffee Bliss  ☕</h1>
          <p>Your perfect coffee experience starts here. </p>
          <a href="/menu" className="btn btn-light">Explore Menu</a>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className=" text-center ">

        <div className="row bg-light-coffee">
          <h2 className="py-3">Our Specialties</h2>
          <section className="d-flex gap-3">
            <div className="col-md-4">
              <img src="./image/pexels-chevanon-302897.jpg" alt="Espresso" className="img-fluid " />
              <h4>Espresso</h4>
            </div>
            <div className="col-md-4">
              <img src="./image/pexels-adela-cristea-1500783-4491396.jpg" alt="Sandwich" className="img-fluid" />
              <h4>Sandwich</h4>
            </div>
            <div className="col-md-4">
              <img src="./image/pexels-edwardeyer-1049620.jpg" alt="pizza" className="img-fluid" />
              <h4>pizza</h4>
            </div>
            </section>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonials bg-light text-center">
        <h2>What Our Customers Say</h2>
        <p>“Best coffee shop in town! The ambiance is fantastic.” – Vansh</p>
        <p>“The espresso is just perfect. Highly recommended!” – Vanshika</p>
      </section>

      {/* Contact Section */}
      <section className="contact text-center">
        <h2>Visit Us</h2>
        <p>h.no52 , new green field , amritsar</p>
      </section>
    </div>
  );
}

export default Home;
