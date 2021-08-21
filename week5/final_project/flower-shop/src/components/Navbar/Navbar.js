import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../providers/AuthProvider';

import '../css/styles.css';

const Navbar = ({handleUserLogout}) => {

  return (
    <div>
      <div class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container px-4 px-lg-5">
            <Link to='/'class="navbar-brand">Best in Bloom Flowers & Gifts </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"> <Link to='/' class="nav-link active" aria-current="page">Home</Link></li>
                        <li class="nav-item"><Link to='/login' class="nav-link">Login</Link></li>
                        <li class="nav-item"><Link to='/wedding' class="nav-link">Wedding</Link></li>
                        <li class="nav-item"><Link to='/fall' class="nav-link">Fall</Link></li>
                        <li class="nav-item"><Link to='/spring' class="nav-link">Spring</Link></li>
                        <li class="nav-item"><Link to='/roses' class="nav-link">Roses</Link></li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                  </form>
              </div>
          </div>
      </div>
    </div>
  );
}

export default withAuth(Navbar);