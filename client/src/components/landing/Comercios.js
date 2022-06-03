import { Data } from '../../data/Data'

import './styles/comercios.css'

export const Comercios = () => {

  return (
    <div className='container-body'>
    <h1>Comercios</h1>
    <div className='container-card'>
      { Data.map( el => {
        return (
          <div key={el.id} className='card-comercio'>
            <img src= { el.thumbnailUrl} alt={ el.title }/>
            <p> { el.title }</p>

          </div>
        )
      } )}
    </div>
    
    </div>
  )
}
