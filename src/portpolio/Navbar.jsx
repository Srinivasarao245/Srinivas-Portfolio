import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top shadow-sm" style={{ background: 'linear-gradient(to right, #0077b6, #00b4d8, #0077b6, #0077b7, #0077b0)' }}>
            <div className="container">
                <a className="navbar-brand fw-bold text-white" href="#home" style={{ textTransform: 'uppercase' }}>Srinivasarao Bagam</a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)
}

export default Navbar