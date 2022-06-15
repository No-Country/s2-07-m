import React from 'react'

export const RatingCard = () => {
  return (
    <div class="wrapper">
       <div class="card">
             <span class="sale">Sale</span>
             <div class="image">
                  <img src="https://i.imgur.com/bEVnJqp.jpg" alt=''/>
             </div>
             <div class="details">
                 <h3>Black Forest cake</h3>
                 <div class="price-ratings">
                   <div class="price">
                     <span>$7.99</span>
                     <span><small>$10.99</small></span>
                   </div>
                   <div class="ratings">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                   </div>
                 </div>
             </div>
       </div>
    </div>
  )
}
