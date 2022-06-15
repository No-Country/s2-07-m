import './products.css'
import {DataProduct} from '../../data/Product'

export const Products = () => {
  return (

    <div className='body'>
        <div className='container-map'>
            { DataProduct.map( (prod) => (
                <div className='card' key={prod.id} >
                    <div className='img-container'>
                        <img src={prod.img} alt={prod.title}/>
                    </div>
                    <div className='text'>
                        <h2>{prod.title}</h2>
                        <p>{prod.description}</p>
                    </div>
                    <div className='price'>
                        <h6>Precio</h6>
                        <h3>$ {prod.price}</h3>
                    </div>
                </div>
            ) ) }
        </div>
    </div>
  )
}
