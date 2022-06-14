import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}
