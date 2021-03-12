// Creando nuestro primer componente.

//Antes lo primero que se hacía era importar la librería de react, ahora no hace falta.

// Aca arriba se importan todas las cosas necesarias para el componente, incluyendo los css

import "./artist-card.css";
import { Link } from "react-router-dom";

//Crear primera clase de nuestro primer componente. Antes se creaban a partir de clases ahora se usan funciones.
// a la funcion se le pasan como parametro las props que necesito que levante para poder hacerlos reutilizables.

function ArtistCard(props) {
  return (
    <div className="col-md-3">
      <Link to={"/artista?" + props.titulo}>
        <div className="item">
          <img className="pic" src={props.img} alt="imagen" />
          <p className="titulo">{props.titulo}</p>
        </div>
      </Link>
    </div>
  );
}

export default ArtistCard;
