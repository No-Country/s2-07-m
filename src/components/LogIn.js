import './Form.css'

export const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <div className='container'>

      <h2>Registrar Comercio</h2>

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
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>

        <div className='inp'>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
        </div>

        <button type="submit">Registro</button>

      </form>
    </div>
  )
}
