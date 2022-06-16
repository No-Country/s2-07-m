import './styles/productCard.css'

export const ProductCard = (props) => {
  const {prod}=props;
  
  const handleButton = () =>{

    alert(`${prod.title} fue añadido al carrito con éxito`)
  }

  return (
    <div className='card product-card' key={prod.id} >
              <div className='img-container'>
                <img src={prod.img} alt={prod.title} />
              </div>
              <div className='text'>
                <h3>{prod.title}</h3>
                <p>{prod.description}</p>
              </div>
              <div className='price'>
                <h6>Precio</h6>
                <h4>$ {prod.price}</h4>
              </div>
              <button onClick={handleButton} >Agregar al carrito</button>
            </div>    
  )
}
