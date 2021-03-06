import React from 'react';
import './styles/comercios.css';
import comercios from '../../assets/img/commerces.png';

export const Comercios = () => {
  return (

    <section id='comercios' className='row g-0'>
      <div className='row'>
        <div className="col-md-6 align-items-center">
          <div className='row horizontal-center comerces-title'>
            <div className='vertical-center'>
              <h1>comercios</h1>
            </div>
          </div>
        </div>
        <div className="col-md-6">
        </div>
      </div>
      <div className='row'>
        <div className="col-md-7">
          <img className='commerces-background ' src={comercios} alt='' />
        </div>
        <div className="col-md-5">
          <div className='row comerces-subtitle'>
            <div className='col'>
              <p>Ellos son algunos de los comercios que ya estan usando nuestro menú digital</p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
