import React from 'react'
import './styles/menuSuggestions.css'
import { DataProduct } from '../../data/Product'
import { ProductCard } from './ProductCard'

export const MenuSuggestions = () => {
  return (

    <section id='suggestions'>
       <div className='container'>
        <h2>Recomendaciones del dia</h2>
      </div>
      <div className='container'>
        <div className='row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 '>
        {DataProduct.map((prod) => (
          <div className='col'>
            <ProductCard prod={prod} />
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}


