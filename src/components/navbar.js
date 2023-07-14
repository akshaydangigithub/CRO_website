import React from 'react'
import '../assets/css/theme.css'
import logo from '../assets/img/logo.png'
import '../assets/js/bootstrap-navbar'

const Navbar = () => {
    return (
        <>
            <nav style={{ background: "#FFFFFF" }} className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block"
                data-navbar-on-scroll="data-navbar-on-scroll">
                <div className="container"><a className="navbar-brand" href="index.html"> <img className="me-3 d-inline-block"
                    src={logo} alt="" style={{ width: "100px" }} /></a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto pt-2 pt-lg-0 font-base">
                            <li className="nav-item px-2" data-anchor="data-anchor"><a className="nav-link fw-bold active" aria-current="page"
                                href="#home">About</a></li>
                            <li className="nav-item px-2" data-anchor="data-anchor"><a className="nav-link fw-bold"
                                href="#service">Complaints</a></li>
                            <li className="nav-item px-2" data-anchor="data-anchor"><a className="nav-link fw-bold" href="#feature">Register</a>
                            </li>
                            <li className="nav-item px-2" data-anchor="data-anchor"><a className="nav-link fw-bold" href="#testimonial">Contact
                                Us</a></li>
                        </ul>
                        <form className="ps-lg-5">
                            <button className="btn btn-link text-danger fw-bold order-1 order-lg-0" type="button">Sign in</button><a
                                className="btn hover-top btn-collab" href="#">File a Complaints</a>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar