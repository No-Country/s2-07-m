import './login.css'
import burguer from '../../assets/img/fondo-ingresa.png'
import { useState } from 'react'



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
        <img className='imagen' src={burguer} alt=''/>
      </div>
      <div className='container-datos'>

        <div className='titulo'>
          <h1>¡Hola! Amigo</h1>
          <h1>comerciante,</h1>
          <h5>Igresa tus datos</h5>
        </div>

        <form>
          <div className='inp'>
            <label htmlFor="email">Correo</label>
            <input 
              id="email"
              name="email"
              type="email"
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
              type="password"
              placeholder= 'Ingresa contraseña'
              autoComplete='off'
              value={ password }
              onChange={ handleInputChange }
            />
          </div>

          <button type="submit" onClick={ handleSubmit }>Ingresar</button>

        </form>

        <p>¿Aún no tienes cuenta?</p>
        <p>Regístrate</p>
      </div>
    </div>
  )
}
