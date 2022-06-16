import React from 'react';
import './stytles/menu.css';
import { Ratings } from '../rating/Ratings';
import { MenuCategories } from './MenuCategories';
import { MenuSuggestions } from './MenuSuggestions';

export const Menu = () => {
  return (
    <section className='menu'>
  
    <MenuCategories />
    <MenuSuggestions />
    <Ratings />
    </section>
  )
}
