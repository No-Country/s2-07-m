import React from 'react';
import { Beneficios } from './Beneficios';
import { Comercios } from './Comercios';
import { Inicio } from './Inicio';
import { Servicios } from './Servicios';
import { Pasos } from './Pasos';
import './styles/landing.css';

export const Landing = () => {
  return (
    <div className='landing-body'>
      <Inicio />
      <Servicios />
      <Beneficios />
      <Pasos />
      <Comercios />
    </div>
  )

}
