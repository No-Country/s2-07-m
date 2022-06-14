import { Beneficios } from './Beneficios'
import { Comercios } from './Comercios'
import { Inicio } from './Inicio'
import {Servicios} from './Servicios'
import {Pasos} from './Pasos'
import './styles/landing.css'
// import { Footer } from '../footer/Footer'


export const Landing = () => {


  return (
    <div className='landing-body'>
     
      <Inicio /> 
      <Servicios />
      <Beneficios />
      <Pasos />
      <Comercios />
         
      {/* <span class="ir-arriba"></span> */}
    </div>
  )
 
}
