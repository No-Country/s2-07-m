import React from 'react'
import { Link } from 'react-router-dom';
import './styles/categoryCard.css'

export const CategorieCard = (props) => {
  const {background, text, ctg}=props;
  
  return (
    <Link to={ctg}>
    <div className="card category-card">
      <img src={background} className="card-img" alt="..."></img>
      <div className="card-img-overlay">
        <p className="card-text">{text} <i className="bi bi-arrow-right"></i></p>
      </div>
    </div>
    </Link>
  )
}
