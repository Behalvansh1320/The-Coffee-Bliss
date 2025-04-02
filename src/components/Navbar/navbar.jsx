import  "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">Coffee Shop</Link>
         
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/menu">Menu</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/orders">Orders</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/help-support">Help & Support</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/locations">Other Locations</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
