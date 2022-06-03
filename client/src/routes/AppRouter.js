import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Comercios } from "../components/landing/Comercios";
import { Landing } from "../components/landing/Landing";
import { Servicios } from "../components/landing/Servicios";
import { Login } from "../components/login/Login";
import { Navbar } from "../components/navbar/Navbar";

export const AppRouter = () => {

  return (

    // <Routes>
    //  <Route exact path='/login' element={ 
    //         <PublicRoute>

    //           <Login /> 
    //         </PublicRoute>
    //       } />
    //       <Route path='*' element= {
    //         <PrivateRoute >
    //           <DashboardRoutes />  
    //         </PrivateRoute>
    //         }>
    //       </Route>       
    // </Routes>

    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Landing />} />
        <Route path='comercios' element={<Comercios />} />
        <Route path='servicios' element={<Servicios />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Route>

    </Routes>
  )
}
