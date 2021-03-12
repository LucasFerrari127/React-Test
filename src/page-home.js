import React from "react";
import "./page-home.css";
import logo from "./uniti.png";
import ReactDOM from "react-dom";
import Modal from "./components/modal.js";

class PageHome extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("busqueda?" + this.state.busqueda);
  };

  onChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state.modal);
    this.setState({
      modal: true,
    });
    console.log(this.state.modal);
  };

  state = {
    busqueda: "",
    modal: false,
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
            <form className="row g-3" onSubmit={this.handleSubmit}>
              <div className="busqueda">
                <input
                  type="text"
                  name="busqueda"
                  id="banda"
                  value={this.props.busqueda}
                  placeholder="Busca una Banda"
                  onChange={this.onChange}
                />
              </div>
              <div className="col-auto"></div>
              <div className="actions">
                <button className="btng" type="submit">
                  Search Similar Artist
                </button>
                <button className="btng" onClick={this.handleClick}>
                  Aguante Uniti!
                </button>
              </div>
            </form>
          </div>
        </div>
        {ReactDOM.createPortal(
          <Modal estado={this.state.modal}>
            <h4>Aguante DevRock</h4>
          </Modal>,
          document.getElementById("teleport")
        )}
      </div>
    );
  }
}

export default PageHome;
