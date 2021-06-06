import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
// import { Resume } from '../../assets/MelanieUhrich.pdf';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  nav-color">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand" href="#"><h4 className="text-color">Melanie Uhrich</h4></Link>
                <div className="d-flex flex-row-reverse">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to='/contact' className="nav-link active" aria-current="page"><h5 className="text-color">Contact Me</h5>
                        </Link> 
                        </li>
                        <li className="nav-item">
                        {/* <a className="nav-link active" aria-current="page" href={ Resume }target="_blank"><h5 className="text-color">Resume</h5></a> */}
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    )
};

export default Header;