import "react";
import PropTypes from "prop-types"; // Import PropTypes
import "bootstrap/dist/css/bootstrap.min.css";

const MenuItem = ({ item }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="text-center shadow">
        <img src={item.image} className="card-img-top p-3" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          <h6 className="text-primary">Rs {item.price.toFixed(1)}</h6>
          <button className="bg-dark text-light py-2">order</button>
        </div>
      </div>
    </div>
  );
};

// ✅ Define prop types
MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuItem;
