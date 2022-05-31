import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { Inicio } from './components/Inicio'
import { Comercios } from './components/Comercios'
import { Servicios } from './components/Servicios'
import { NavBarMenu } from './layouts/NavBar'
import { LogIn } from "./components/LogIn"


export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={ <NavBarMenu /> }>
            <Route index element={ <Inicio /> } />
            <Route path='comercios' element={ <Comercios /> } />
            <Route path='servicios' element={ <Servicios /> } />
            <Route path='login' element={ <LogIn /> } />

            <Route path='*' element={ <Navigate replace to= '/' /> } />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}
