import React from 'react'
import './stytles/menuCategories.css'
import { CategorieCard } from './CategorieCard'
import img1 from '../../assets/img/categories-bg-bebidas-calientes.png'
import img2 from '../../assets/img/categories-bg-bebidas-frias.png'
import img3 from '../../assets/img/categories-bg-panaderia.png'
import img4 from '../../assets/img/categories-bg-pasteleria.png'
import img5 from '../../assets/img/categories-bg-reposteria.png'
import img6 from '../../assets/img/categories-bg-otros.png'

export const MenuCategories = () => {
  return (
    <section id='categories'>
      <div className='container'>
        <h2>Carta</h2>
        <p>Escoje entre nuestras diferentes opciones de productos deliciosos.</p>
      </div>
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-3">
          <div className="col">
            <CategorieCard background={img1} text='Bebidas Calientes' ctg="?q=bebidas-calientes"/>
          </div>
          <div className="col">
          <CategorieCard background={img2} text='Bebidas Frías' ctg="?q=bebidas-frias"/>
          </div>
          <div className="col">
          <CategorieCard background={img3} text='Panadería' ctg="?q=panaderia"/>
          </div>
          <div className="col">
          <CategorieCard background={img4} text='Pastelería' ctg="?q=pasteleria"/>
          </div>
          <div className="col">
          <CategorieCard background={img5} text='Repostería' ctg="?q=reposteria"/>
          </div>
          <div className="col">
          <CategorieCard background={img6} text='Otros' ctg="?q=otros"/>
          </div>
        </div>
      </div>
    </section>
  )
}
