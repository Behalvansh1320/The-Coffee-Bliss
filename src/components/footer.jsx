import "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5  ">
      <div className="container  text-center ">
        <div className="row d-flex align-text-center justify-content-center">
          {/* Contact Section */}
          <div className="col-md-4 mb-3  ">
            <h5>Contact Us</h5>
            <p>Email: vanshbehal654@gmail.com</p>
            <p>Phone: +91 7009625353</p>
          </div>

         
        </div>

        {/* Copyright */}
        <hr className="bg-light"/>
        <p className="mb-0">© 2025 Coffee Cafe | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
