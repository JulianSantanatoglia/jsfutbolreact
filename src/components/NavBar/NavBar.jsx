// IMPORTS
import CartWidget from "../CartWidget/CartWidget";
import FutbolSolid from "./Logo/FutbolSolid";
import LogoUser from "../CartWidget/LogoUser";
import "./NavBar.css";


// COMPONENTE
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid navbar-prop">
                    <div className="prop-logo-flex">
                    <a className="navbar-brand" href="#">JSport</a>
                    <FutbolSolid />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <button className="nav-link prop-link" aria-current="page" href="#">Home</button>
                            <button className="nav-link prop-link" href="#">Camisetas de América</button>
                            <button className="nav-link prop-link" href="#">Camisetas de Europa</button>
                        </div>
                        <CartWidget />
                        <LogoUser />
                </div>
                </div>
            </nav>
        </> 
    )
}


// EXPORTS
export default NavBar
