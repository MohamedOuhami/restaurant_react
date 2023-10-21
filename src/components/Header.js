import React from 'react';
import { Outlet, Link } from "react-router-dom";
function Header() {
    const headerStyle = {
        background: '#f6b83c',
        color: 'white',
        padding: '1rem',
    };

    const buttonStyle = {
        margin: '0 10px',
    };

    return (
        <header style={headerStyle}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <h2 className="display-6">ReserNight</h2>
                    </div>
                    <div className="col-md-8 text-end">
                        <nav>
                            <ul className="list-inline" style={{ margin: 0, padding: 0 }}>
                                <li className="list-inline-item">
                                    <button className="btn btn-outline-light custom-button" style={buttonStyle}>See Restaurants</button>
                                </li>
                                <li className="list-inline-item">
                                    <button className="btn btn-outline-light" style={buttonStyle}>Donate</button>
                                </li>
                                <li className="list-inline-item">
                                    <button className="btn btn-outline-light" style={buttonStyle}>
                                        <Link to="/login">Log in</Link>
                                    </button>
                                </li>
                                <li className="list-inline-item">
                                    <button className="btn btn-outline-light" style={buttonStyle}>
                                        <Link to="/signup">Sign up</Link>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
