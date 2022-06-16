import React from 'react';
import './styles/menu.css';
import { Ratings } from '../rating/Ratings';
import { MenuCategories } from './MenuCategories';
import { MenuSuggestions } from './MenuSuggestions';

export const Menu = () => {
  return (
    <div className='menu'>
    
    <MenuCategories />
    <MenuSuggestions />
    <Ratings />
    </div>
  )
}
