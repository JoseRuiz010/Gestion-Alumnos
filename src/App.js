
import { BrowserRouter } from "react-router-dom";
import NavegacionPrincipal from "./Routes/NavegacionPrincipal";
import { ScreenHome } from "./Screens/ScreenHome";



function App() {
  return (
    <BrowserRouter>
      <NavegacionPrincipal />
    </BrowserRouter>
  )
}

export default App;
