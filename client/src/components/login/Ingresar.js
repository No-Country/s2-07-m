import './login.css'
import burguer from '../../assets/img/fondo-ingresa.png'



export const Ingresar = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
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

        <form  onSubmit={ handleSubmit }>

          <div className='inp'>
            <label htmlFor="email">Correo</label>
            <input id="email" name="email" type="email" />
          </div>

          <div className='inp'>
            <label htmlFor="password">Contraseña</label>
            <input id="password" name="password" type="password" />
          </div>

          <button type="submit">Ingresar</button>

        </form>

        <p>¿Aún no tienes cuenta?</p>
        <p>Regístrate</p>
      </div>
    </div>
  )
}
