import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import flecha from '../../assets/img/header-arrow-title.png'
import background from '../../assets/img/header-food-background-xl.png'


import './styles/inicio.css'



export const Inicio = () => {

  return (

    <header id='home'>
      <img className='home-background' src={background} alt='' />
      <nav className='navbar navbar-expand-lg navbar-transparent bg-transparent home-navbar'>
        <div className="container-fluid justify-content-end">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#servicios">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#beneficios">Beneficios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#comercios">Comercios</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary " aria-current="page" onClick={() => window.location.href = '#servicios'} >Registrate</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary " aria-current="page" onClick={() => window.location.href = '#servicios'}>Ingresá</button>
            </li>
          </ul>
        </div>
      </nav>
      <img className='home-arrow' src={flecha} alt='flecha' />
      <div className='home-title'>
        <h1>Menú Digital</h1>
      </div>
      <div className='home-subtitle'>
        <p>Ahora podras tener el menú de tu comercio a la alcance de todos tus clientes. </p>
      </div>0
    </header>

  );
}