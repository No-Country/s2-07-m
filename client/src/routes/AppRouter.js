import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
// import { Comercios } from "../components/landing/Comercios";
import { Landing } from "../components/landing/Landing";
// import { Servicios } from "../components/landing/Servicios";
import { Ingresar} from "../components/login/Ingresar";
import { Registro } from "../components/login/Registro";
// import { Re} from "../components/login/Registro";
// import { Navbar } from "../components/navbar/Navbar";

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
      {/* <Route path='/' element={<Navbar />}> */}
        <Route index element={<Landing />} />
        <Route path='ingresar' element={<Ingresar />} />
        <Route path='registro' element={<Registro />} />
        <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  )
}
