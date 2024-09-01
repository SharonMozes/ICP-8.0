import "./navbar.css";
import BrandName from "./brand.js";

function Navbar() {
    return (
        <div>
            <div className="brandTitle">
                <BrandName />
            </div>
            <div className="navbar">
                <div className="navbar-links">
                    <a href="/" className="navbarlink">Home</a>
                    <a href="/about" className="navbarlink">About</a>
                    <a href="/contact" className="navbarlink">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
