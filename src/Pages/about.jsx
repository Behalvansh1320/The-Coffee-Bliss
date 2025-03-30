import "react";

function About() {
  return (
    <div>
      <section className="bg-coffee-brown text-white text-center px-3 py-5">
        <h1 className="fw-bold display-4 text-dark"><u>About Us</u></h1>
        <p >
          At <u><strong>Coffee Bliss</strong></u>, we don’t just serve coffee—we craft an experience unlike any other.
          What makes our coffee unique is our dedication to quality, freshness, and artistry. We source only
          the finest beans, carefully roasted to bring out rich, bold flavors that awaken the senses. Every
          cup is brewed with precision, ensuring the perfect balance of aroma, taste, and smoothness. Whether
          it is our signature blends, handcrafted specialty drinks, or ethically sourced single-origin brews,
          we take pride in every sip. Our passion for coffee extends beyond the cup—it’s about creating a warm,
          welcoming space where every visit feels like home. Come and taste the difference—because exceptional
          coffee isn’t just made, it’s crafted with love. ☕✨
        </p>
      </section>


      <section className="d-flex align-items-center justify-content-center bg-dark-coffee text-white px-3 py-3 smaller-section gap-4">
        <div className="col-md-6 text-center">
        <h1 className=" fw-bold display-4 text-dark pb-4"> <u>Founder</u></h1>

          <p >Hi, I am <strong>Vansh Behal</strong>, the founder of this coffee shop. My passion for coffee and community
            led me to create a place where people can enjoy premium-quality coffee and connect with others.
            Every cup served here reflects my dedication to taste, quality, and warmth.</p>
        </div>
        <div className="col-md-5 text-center ">
          <div>
                        <img src="./image/WhatsApp Image 2025-03-29 at 2.15.19 PM.jpeg" alt="Espresso" className="img-fluid w-50" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

