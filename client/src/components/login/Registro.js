import './login.css'
import registro from '../../assets/img/fondo-registro.png'
import { Link } from 'react-router-dom'



export const Registro = () => {
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

        <form  onSubmit={ handleSubmit }>

          <div className='inp'>
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" name="nombre" type="text" />
          </div>

          <div className='inp'>
            <label htmlFor="apellido">Apellido</label>
            <input id="apellido" name="apellido" type="text" />
          </div>

          <div className='inp'>
            <label htmlFor="email">Correo</label>
            <input id="email" name="email" type="email" />
          </div>

          <div className='inp'>
            <label htmlFor="password">Contraseña</label>
            <input id="password" name="password" type="password" />
          </div>
          <div className='inp'>
            <label htmlFor="password">Repetir contraseña</label>
            <input id="password" name="password" type="password" />
          </div>
<Link to={'/carta'}>
          <button className='btn btn-primary' type="submit">Registrarse</button>
</Link>

        </form>
        <Link to={'/ingresar'}>
          <p>¿Ya tienes cuenta?</p>
          </Link>       
      </div>
    </div>
  )
}
