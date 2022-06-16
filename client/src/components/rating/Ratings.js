import React from 'react'
import './styles/ratings.css';
import {RatingCard} from './RatingCard'

export const Ratings = () => {
  return (
    <section id='suggestions'>
      <div className='container'>
    <h2>Valoraciones</h2>
      </div>

   <div className='container'>
    <div className='row'>
    <div className='col-3'>
      <RatingCard review='"Deliciosa la Comida, Excelente atención al Cliente"' rating={5}  />
    </div>
    <div className='col-3'>
      <RatingCard review='"Deliciosa la Comida, Excelente atención al Cliente"' rating={4.5}  />
    </div>
    <div className='col-3'>
      <RatingCard review='"Deliciosa la Comida, Excelente atención al Cliente"' rating={3.5}  />
    </div>
    <div className='col-3'>
      <RatingCard review='"Deliciosa la Comida, Excelente atención al Cliente"' rating={3}  />
    </div>
    </div>
   </div> 
    </section>
  )
}
