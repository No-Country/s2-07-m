import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export const Footer = () => {
  return (
    <footer className='row'>
      <div className='col-3 arrow-footer'>
        <h2>Menú Digital</h2>
      </div>
      <div className='col-6'>
      </div>
      <div className='col-3 redes'>
        <p>Nuestras Redes</p>
        <p>
          <Link to='#' >
            <i className="bi bi-instagram"></i>
          </Link>
          <Link to='#' >
            <i className="bi bi-facebook"></i>
          </Link>
        </p>
      </div>
    </footer>
  )
}
