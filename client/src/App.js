import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./routes/AppRouter"
import 'bootstrap-icons/font/bootstrap-icons.css';


export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  )
}
