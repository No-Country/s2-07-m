import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Landing } from "../components/landing/Landing";
import { Login } from "../components/login/Login";

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
        <Route path='login' element={<Login />} />
        {/* <Route path='signin' element={<Signin />} /> */}
        <Route path='*' element={<Navigate replace to='/' />} />
      {/* </Route> */}

    </Routes>
  )
}
