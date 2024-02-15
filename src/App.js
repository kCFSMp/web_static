import { Route, Routes } from "react-router-dom";
import NavBard from "./Components/NavBard/NavBard";
import Footer from "./Components/Footer/Footer";
import Inicio from "./page/Inicio/Contenido_inicio";
import Contenido_nosotros from "./page/Nosotros/Contenido_nosotros";
import Contenido_cultura from "./page/Cultura/Contenido_cultura";
import Contenido_informacion from "./page/Informacion/Contenido_informacion";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBard />
         <Routes>
         <Route path="/" element={Inicio()} />
          {/*
        <Route path="/acercadenosotros" element={<Contenido_nosotros />} />
        <Route path="/cultura" element={<Contenido_cultura />} />
        <Route path="/informacion" element={<Contenido_informacion />} />
        */}
      </Routes> 
      <Footer />
    </>
  );
}

export default App;