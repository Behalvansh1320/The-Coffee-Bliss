import  "react";
import menuData from "../data/menuData";
import MenuItem from "../components/MenuItem";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  return (
    <div className="position-relative text-center text-light">
      {/* Video Background */}
      {/* used position-absolute to ensure that the videos stays in the background */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden"
      style={{filter : "blur(10px)",}}>
        <video autoPlay loop muted className="w-100 h-100" style={{ objectFit: "cover" }}>
          <source src="./src/assets/2909914-uhd_3840_2024_24fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Menu Content */}
      <div className="container position-relative py-5">
        <h2 className="mb-4">Our Menu</h2>
        <div className="row">
          {menuData.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
