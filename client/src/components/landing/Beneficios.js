import React from 'react';
import './styles/beneficios.css';

export const Beneficios = () => {
  return (
    <section id='beneficios'>
      <div className='beneficios-container'>
        <div className='beneficios-title'>
          <h1>Beneficios</h1>
          <div className='beneficios-title-underline'></div>
        </div>
        <div className='beneficios-list-container'>
          <ul className='beneficios-list'>
            <li>Evitas el uso de Papel</li>
            <li>Implementar nuevas tecnologias de inovación.</li>
            <li>Recibes automaticamente el pedido a Través de la Plataforma.</li>
            <li>Puedes hacer cambios en tu menu y se generaran automaticamente.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}