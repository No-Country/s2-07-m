import './login.css'
import burguer from '../../assets/img/fondo-ingresa.png'
feat-menu-component
import { Link } from 'react-router-dom'
=======
import { useState } from 'react'
develop



export const Ingresar = () => {

  const initialValue = {
    email: '',
    password: '',

  }

    // Crea el state del form
    const [formState, setFormState] = useState({
      email: '',
      password: '',
    })
  
    // desestructuración para llamarlo mas facil
    const { email, password} = formState
    
    // setea el Form con el value de los inputs
    const handleInputChange = ( {target} ) => {
      setFormState( {
        ...formState,
        [target.name] : target.value,
      })
  
    }
  
    // función para enviar el formulario
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formState)
      setFormState(initialValue)
      alert(`Bienvenido: ${email}`)
      // Todo: Redireccionar a la pagina de carga de menu
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

 feat-menu-component
        <form onSubmit={handleSubmit}>


          <div className='inp'>
            <label htmlFor="email">Correo</label>
            <input 
              id="email"
              name="email"
              type="text"
              autoComplete='off'
              placeholder='Ingresa tu email'
              value={ email }
              onChange={ handleInputChange }
            />
          </div>

          <div className='inp'>
            <label htmlFor="password">Contraseña</label>
            <input 
              id="password"
              name="password"
              type="text"
              placeholder= 'Ingresa contrseña'
              autoComplete='off'
              value={ password }
              onChange={ handleInputChange }
            />
          </div>
 feat-menu-component
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
