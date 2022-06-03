
// import { Link, Outlet } from 'react-router-dom'

import { Link, Outlet } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  return (
    <>
    {/* <Navbar className='nav-bar' variant='dark' expand="lg">
        <Container>
            <Navbar.Brand as={ Link } to="/" >Menu Digital</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={ Link } to="/" >Inicio</Nav.Link>
                <Nav.Link as={ Link } to="/servicios" >Servicios</Nav.Link>
                <Nav.Link as={ Link } to="/comercios" >Comercios</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <section>
        <Outlet></Outlet>
    </section> */}
    <div className='nav-bar'>
        <Link className='links' to='/'><h3>Menu Digital</h3></Link>
        
        <nav className='nav-links'>
            <Link className='links' to='/' >INICIO</Link>
            <Link className='links' to='/servicios' >SERVICIOS</Link>
            <Link className='links' to='/comercios' >COMERCIOS</Link>
        </nav>
            <Link className='links btn' to='/login'>INGRESAR</Link>
    </div>
    <section>
        <Outlet />
    </section>
    </>
  )
}
