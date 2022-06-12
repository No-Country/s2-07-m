import { Link } from 'react-scroll'
import './styles/comercios.css'
import comercios from '../../assets/img/commerces.png'


export const Comercios = () => {

  return (

    <section id='comercios' className='row g-0'>

      <div className='row'>
        <div class="col-md-6 align-items-center">
          <div className='row horizontal-center comerces-title'>
            <div className='vertical-center'>
              <h1>comercios</h1>
            </div>
          </div>
        </div>
        <div class="col-md-6">
        </div>
      </div>

      <div className='row'>

        <div class="col-md-7">
            <img className='commerces-background ' src={comercios} alt='' />
        </div>

        <div class="col-md-5">
          <div className='row comerces-subtitle'>
            <div className='col'>
              <p>Ellos son allgunos de  los comercios que ya estan usando nuestro menú digital</p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <Link className='btn btn-primary' to='/comercios' >Ver más</Link>
            </div>
          </div>
        </div>


      </div>

    </section>

  )
}
