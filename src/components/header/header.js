import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate=useNavigate()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid" style={{marginLeft: 100}}>
                    <NavLink className="navbar-brand" to="/">BStore</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/news">News</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile">Profile</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link to="cart" className="btn btn-secondary my-2 my-sm-0">My cart</Link>
                            <button>En</button>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

