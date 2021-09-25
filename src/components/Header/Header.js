import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
                <div class="container">
                    <a class="navbar-brand d-flex align-items-center" href="/nav">
                        <img className='logo' src={logo} alt="" />
                        <h5 className='text-light ms-2'>City Cafe</h5>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="/home">Home</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link active text-light" aria-current="page" href="/home">About</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link active text-light" aria-current="page" href="/home">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;