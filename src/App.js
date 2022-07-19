import "./App.css";
import { PageWrapper } from "./components/PageWrapper";
import { Pelicula } from "./components/Pelicula";
import { PeliculasJson } from "./peliculas.json";

function App() {
  let peliculas = PeliculasJson;

  return (
    <PageWrapper>
      {peliculas.map((pelicula) => (
        <Pelicula
          titulo={pelicula.titulo}
          calificacion={pelicula.calificacion}
          director={pelicula.director}
          actores={pelicula.actores}
          fecha={pelicula.fecha}
          duracion={pelicula.duracion}
          img={pelicula.img}
        >
          {pelicula.descripcion}
        </Pelicula>
      ))}
    </PageWrapper>
  );
}

export default App;
