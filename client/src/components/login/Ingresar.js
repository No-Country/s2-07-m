import './login.css'
import burguer from '../../assets/img/fondo-ingresa.png'
import { Link } from 'react-router-dom'



export const Ingresar = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <div className='container-body'>
      <div className='container-imagen'>
        <img className='imagen' src={burguer} alt='' />
      </div>
      <div className='container-datos'>

        <div className='titulo'>
          <h1>¡Hola! Amigo</h1>
          <h1>comerciante,</h1>
          <h5>Igresa tus datos</h5>
        </div>

        <form onSubmit={handleSubmit}>

          <div className='inp'>
            <label htmlFor="email">Correo</label>
            <input id="email" name="email" type="email" />
          </div>

          <div className='inp'>
            <label htmlFor="password">Contraseña</label>
            <input id="password" name="password" type="password" />
          </div>
          <Link to={'/carta'}>
            <button className='btn btn-primary' type="submit">Ingresar</button>
          </Link>
        </form>
        <Link to='/registro'>
          <p>¿Aún no tienes cuenta?</p>
        </Link>
      </div>
    </div>
  )
}
