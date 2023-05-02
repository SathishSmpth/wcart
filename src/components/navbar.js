import logo from "../images/logo.png";

const Navbar = () => {
    return (
        <div className="navigation-bar-container">
            <div className="navigation-bar-brand">
                <img src={logo} alt="W Cart" />
            </div>
            <div className="navigation-bar-brand">
                <img src={logo} alt="W Cart" />
            </div>
            <div className="navigation-bar-link">
                <div><b>About</b></div>
                <div><b>Services</b></div>
                <div><b>Features</b></div>
                <div><b>Choose Plan</b></div>
                <div><b>Contact</b></div>
            </div>
        </div>
    )
}

export default Navbar;