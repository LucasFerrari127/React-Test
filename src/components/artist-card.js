// Creando nuestro primer componente.

//Antes lo primero que se hacía era importar la librería de react, ahora no hace falta.

// Aca arriba se importan todas las cosas necesarias para el componente, incluyendo los css

import "./artist-card.css";

//Crear primera clase de nuestro primer componente. Antes se creaban a partir de clases ahora se usan funciones.

function ArtistCard() {
  return (
    <div className="col-md-3">
      <div className="item">
        <img
          className="pic"
          src="https://4.bp.blogspot.com/-5lGj9Kkvlpg/WWcSjnaneGI/AAAAAAABM0k/VukXPXPgS2kZJbjLjOFB4486_y9oiv6oACLcBGAs/s1600/Club%2BAtletico%2BNueva%2BChicago256x.png"
          alt="Escudo Nueva Chicago"
        />
        <p className="titulo">Soy de Nueva Chicago</p>
      </div>
    </div>
  );
}

export default ArtistCard;
