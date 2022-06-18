import {useState, useEffect} from 'react'

import './login.css'
import registro from '../../assets/img/fondo-registro.png'
import { Link } from 'react-router-dom'



export const Registro = () => {
  const initialValue = {
    name: '',
    apellido: '',
    email: '',
    password: '',

  }

  // Crea el state del form
  const [formState, setFormState] = useState(initialValue)

  // desestructuración para llamarlo mas facil
  const {name, apellido, email, password} = formState
  
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
    console.log(e)
 
    }


  return (
    <div className='container-body'>
      <div className='container-imagen'>
        <img className='imagen' src={registro} alt=''/>
      </div>
      <div className='container-datos'>

        <div className='titulo'>
          <h1>¡Bienvenido!</h1>
          <h5>Crea tu perfil</h5>
        </div>

        <form >

          <div className='inp'>
            <label htmlFor="nombre">Nombre</label>
            <input 
              id="nombre"
              name="name"
              type="text"
              placeholder= 'Ingresa tu nombre'
              autoComplete='off'
              value={name}
              onChange={ handleInputChange }
            />
          </div>

          <div className='inp'>
            <label htmlFor="apellido">Apellido</label>
            <input 
              id="apellido"
              name="apellido"
              type="text"
              placeholder= 'Ingresa tu apellido'
              autoComplete='off'
              value={ apellido }
              onChange={ handleInputChange }
            />
          </div>

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
{/* 
          <div className='inp'>
            <label htmlFor="password">Repetir contraseña</label>

            <input id="password" name="password" type="password" />
          </div>
<Link to={'/carta'}>
          <button className='btn btn-primary' type="submit">Registrarse</button>
</Link>
=======
            <input id="password2" name="password" type="password" />
            
          </div> */}

          <button type="submit" onClick={ handleSubmit }>Registrarse</button>


        </form>
        <Link to={'/ingresar'}>
          <p>¿Ya tienes cuenta?</p>
          </Link>       
      </div>
    </div>
  )
}
