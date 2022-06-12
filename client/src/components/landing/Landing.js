import {Route, Routes} from 'react-router-dom'

import { Beneficios } from './Beneficios'
import { Comercios } from './Comercios'
import { Inicio } from './Inicio'
import {Servicios} from './Servicios'
import {Pasos} from './Pasos'
import './styles/landing.css'


export const Landing = () => {


  return (
    <body className='landing-body'>
     
      <Inicio /> 
      <Servicios />
      <Beneficios />
      <Pasos />
      <Comercios />
      
      <span class="ir-arriba"></span>
    </body>
  )
 
}
