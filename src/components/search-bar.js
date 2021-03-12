import "./search-bar.css";
import React from "react";
import logo from "../uniti.png";
import { Link, BrowserRouter } from "react-router-dom";

//Crear primera clase de nuestro primer componente. Antes se creaban a partir de clases ahora se usan funciones.
// a la funcion se le pasan como parametro las props que necesito que levante para poder hacerlos reutilizables.
//eventos como etiqueta con llamada a la funcion que maneja ese evento.

// onChange, onSubmit, onClick

// Estados:

// function SearchBar(props) {
//   const State = useState("");

//   function HandleChange(e) {
//     State = useState(e.target.value);
//     console.log(State);
//   }
//   // function handleClick(e) {
//   //   e.preventDefault();
//   //   console.log(e.target.name, "apretaste el boton");
//   // }
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(e.target.name, "submit");
//   }

//   return (
//     <div className="row">
//       <div className="col-md-2 ">
//         <img src={logo} alt="" className="logo-barra" />
//       </div>
//       <div className="col-md-4">
//         <form className="row g-3" onSubmit={handleSubmit}>
//           <div className="busqueda">
//             <input
//               type="text"
//               name="Input"
//               id="banda"
//               placeholder="Busca una Banda"
//               onChange={HandleChange}
//             />
//           </div>
//           <div className="col-auto"></div>
//         </form>
//       </div>{" "}
//       <hr />
//     </div>
//   );
// }

class SearchBar extends React.Component {
  // handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  state = {
    estado: this.props.key,
  };

  componentDidMount() {
    console.log(this.props.key);
  }
  componentWillUnmount() {
    if (this.state.estado == true) {
      let barra = document.querySelector("form");
      barra.style.display = "none";
    }
    console.log(this.props.key);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-2 ">
          <Link to="/">
            <img src={logo} alt="" className="logo-barra" />
          </Link>
        </div>
        <div className="col-md-4">
          <form
            className="row g-3 barra"
            onSubmit={this.props.onSubmit}
            key={this.props.key}
          >
            <div className="busqueda">
              <input
                type="text"
                name="busqueda"
                id="banda"
                value={this.props.busqueda}
                placeholder="Busca una Banda"
                onChange={this.props.onChange}
              />
            </div>
          </form>
        </div>
        <hr />
      </div>
    );
  }
}

export default SearchBar;
