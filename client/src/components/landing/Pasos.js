import React from 'react'
import './styles/pasos.css'
import underline from '../../assets/img/title-underline-2.png'

export const Pasos = () => {
  return (
    <section id='pasos'>
      <div className='steps-container'>
        <div className='col-6'></div>
        <div className='col align-self-end'>
          <div className='steps-title'>
            <div className='row'>
              <h1>Paso a Paso</h1>
            </div>
            <div className='row'>
              <div className='col '>
                <img className='steps-title-underline' src={underline} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='steps-background'></div>
      </div>
    </section>
  )
}