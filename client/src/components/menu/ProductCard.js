import './styles/productCard.css'

export const ProductCard = (props) => {
  const { prod } = props;

  const handleButton = () => {

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
      <div className='row'>
        <div className='col-9'>
          <div className='price'>
            <h6>Precio</h6>
            <h4>$ {prod.price}</h4>
          </div>
        </div>
          <div className='col-3 vertical-center'>
            <h3 className='color-primary'>
            <i className=" bi bi-plus-circle-fill" onClick={handleButton}></i>
            </h3>
          </div>
      </div>
    </div>
  )
}
